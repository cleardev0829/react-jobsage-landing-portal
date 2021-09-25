// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  employerLogin: path(ROOTS_AUTH, "/employer-login"),
  employerLoginUnprotected: path(ROOTS_AUTH, "/employer-login-unprotected"),
  employerRegister: path(ROOTS_AUTH, "/employer-register"),
  employerRegisterUnprotected: path(
    ROOTS_AUTH,
    "/employer-register-unprotected"
  ),
  employerUpdateProfile: path(ROOTS_AUTH, "/employer-update-profile"),
  candidateLogin: path(ROOTS_AUTH, "/candidate-login"),
  candidateRegister: path(ROOTS_AUTH, "/candidate-register"),
  candidateUpdateProfile: path(ROOTS_AUTH, "/candidate-update-profile"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  verify: path(ROOTS_AUTH, "/verify"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  blog: "/blog",
  demo: "/demo",
  resumeBuilder: "/resume-builder",
  resumeParsing: "/resume-parsing",
  resumeUpload: "/resume-upload",
  contact: "/contact-us",
  privacyPolicy: "/privacy-policy",
  termsConditions: "/terms-conditions",
  recruitmentSolution: "/recruitment-solution",
  candidateSourcing: "/candidate-sourcing",
  postSearch: "/post-search",
  rekommendation: "/rekommendation",
  faqs: "/faqs",
  page404: "/404",
  page500: "/500",
  components: "/components",
};
