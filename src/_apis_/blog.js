/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-useless-escape */
import faker from "faker";
import { paramCase } from "change-case";
// utils
import { mockImgCover } from "../utils/mockImages";
//
import mock from "./mock";

// ----------------------------------------------------------------------

const POST_TITLES = [
  "Accelerate Your Recruitment",
  "Cognitive Hiring: The Future of Recruitment",
  "HOW AI IS REVOLUTIONIZING CANDIDATE SCREENING",
  "Workforce of the future!",
];

const PDF_URLS = [
  "https://firebasestorage.googleapis.com/v0/b/rekommender-portal-lle.appspot.com/o/blogs%2FAccelerate%20your%20recruitment.pdf?alt=media&token=251e4dd1-77e4-4055-8aef-9643d6964dbd",
  "https://firebasestorage.googleapis.com/v0/b/rekommender-portal-lle.appspot.com/o/blogs%2Fcognitive%20hiring.pdf?alt=media&token=1adef908-40d1-43ad-be16-7a5258ca887a",
  "https://firebasestorage.googleapis.com/v0/b/rekommender-portal-lle.appspot.com/o/blogs%2FAI%20Revolutionizing.pdf?alt=media&token=3a2bf51c-dd35-4b46-b5e7-d143b43f879b",
  "https://firebasestorage.googleapis.com/v0/b/rekommender-portal-lle.appspot.com/o/blogs%2FWorkforce%20of%20future.pdf?alt=media&token=de9607b4-a828-4c10-8f58-68315afcf91c",
];

let posts = POST_TITLES.map((_, index) => {
  const setIndex = index;
  return {
    id: `0feb2990-4210-4170-93a4-37e8f5958a18-${setIndex}`,
    cover: mockImgCover(setIndex),
    title: POST_TITLES[setIndex],
    description: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    view: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    pdfUrl: PDF_URLS[setIndex],
  };
});

// ----------------------------------------------------------------------

mock.onGet("/api/blog/posts/all").reply(200, { posts });

// ----------------------------------------------------------------------

mock.onGet("/api/blog/posts").reply((config) => {
  try {
    const { index, step } = config.params;
    const maxLength = posts.length;
    const loadMore = index + step;

    const sortPosts = [...posts].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    const results = sortPosts.slice(0, loadMore);

    return [200, { results, maxLength }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

// ----------------------------------------------------------------------

mock.onGet("/api/blog/post").reply((config) => {
  try {
    const { title } = config.params;
    const post = posts.find((_post) => paramCase(_post.title) === title);

    if (!post) {
      return [404, { message: "Post not found" }];
    }

    return [200, { post }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

// ----------------------------------------------------------------------

mock.onGet("/api/blog/posts/recent").reply((config) => {
  try {
    const { title } = config.params;

    const recentPosts = posts
      .filter((_post) => paramCase(_post.title) !== title)
      .slice(posts.length - 5, posts.length);

    if (!recentPosts) {
      return [404, { message: "Post not found" }];
    }

    return [200, { recentPosts }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

// ----------------------------------------------------------------------

mock.onGet("/api/blog/posts/search").reply((config) => {
  try {
    const { query } = config.params;
    const cleanQuery = query.toLowerCase().trim();
    const results = [];

    posts.forEach((post) => {
      if (!query) {
        return results.push(post);
      }

      if (post.title.toLowerCase().includes(cleanQuery)) {
        return results.push(post);
      }
    });

    return [200, { results }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});
