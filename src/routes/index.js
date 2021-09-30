import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// guards
import GuestGuard from "../guards/GuestGuard";
import LoadingScreen from "../components/LoadingScreen";
// import AuthGuard from "src/guards/AuthGuard";
import RoleBasedGuard from "src/guards/RoleBasedGuard";

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "employer-login",
          element: (
            <GuestGuard>
              <EmployerLogin />
            </GuestGuard>
          ),
        },
        {
          path: "employer-register",
          element: (
            <GuestGuard>
              <EmployerRegister />
            </GuestGuard>
          ),
        },
        {
          path: "employer-update-profile",
          element: <EmployerRegister />,
        },
        {
          path: "candidate-login",
          element: (
            <GuestGuard>
              <CandidateLogin />
            </GuestGuard>
          ),
        },
        { path: "employer-login-unprotected", element: <EmployerLogin /> },
        {
          path: "employer-register-unprotected",
          element: <EmployerRegister />,
        },
        {
          path: "candidate-register",
          element: (
            <GuestGuard>
              <CandidateRegister />
            </GuestGuard>
          ),
        },
        {
          path: "candidate-update-profile",
          element: <CandidateRegister />,
        },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "verify", element: <VerifyCode /> },
      ],
    },

    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "demo", element: <Demo /> },
        { path: "about-us", element: <About /> },
        { path: "blog", element: <Blog /> },
        {
          path: "resume-builder",
          element: (
            <RoleBasedGuard accessibleRoles={["Candidate"]}>
              <ResumeBuilder />
            </RoleBasedGuard>
          ),
        },

        { path: "resume-upload", element: <ResumeUpload /> },
        { path: "contact-us", element: <Contact /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "terms-conditions", element: <TermsConditions /> },
        { path: "recruitment-solution", element: <RecruitmentSolution /> },
        { path: "post-search/:from", element: <PostSearch /> },
        { path: "faqs", element: <Faqs /> },
        {
          path: "resume-parsing",
          element: (
            <RoleBasedGuard accessibleRoles={["Employer"]}>
              <ResumeParsing />
            </RoleBasedGuard>
          ),
        },
        {
          path: "candidate-sourcing",
          element: (
            <RoleBasedGuard accessibleRoles={["Employer"]}>
              <CandidateSourcing />
            </RoleBasedGuard>
          ),
        },
        {
          path: "rekommendation",
          element: (
            <RoleBasedGuard accessibleRoles={["Employer"]}>
              <Rekommendation />
            </RoleBasedGuard>
          ),
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const EmployerLogin = Loadable(
  lazy(() => import("../pages/authentication/EmployerLogin"))
);
const EmployerRegister = Loadable(
  lazy(() => import("../pages/authentication/EmployerRegister"))
);
const CandidateLogin = Loadable(
  lazy(() => import("../pages/authentication/CandidateLogin"))
);
const CandidateRegister = Loadable(
  lazy(() => import("../pages/authentication/CandidateRegister"))
);
const ResetPassword = Loadable(
  lazy(() => import("../pages/authentication/ResetPassword"))
);
const VerifyCode = Loadable(
  lazy(() => import("../pages/authentication/VerifyCode"))
);
const Demo = Loadable(lazy(() => import("../pages/authentication/Demo")));

// Main
const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const About = Loadable(lazy(() => import("../pages/About")));
const Blog = Loadable(lazy(() => import("../pages/Blog")));
const ResumeBuilder = Loadable(lazy(() => import("../pages/ResumeBuilder")));
const ResumeParsing = Loadable(lazy(() => import("../pages/ResumeParsing")));
const ResumeUpload = Loadable(lazy(() => import("../pages/ResumeUpload")));
const PrivacyPolicy = Loadable(lazy(() => import("../pages/PrivacyPolicy")));
const TermsConditions = Loadable(
  lazy(() => import("../pages/TermsConditions"))
);
const CandidateSourcing = Loadable(
  lazy(() => import("../pages/CandidateSourcing"))
);
const PostSearch = Loadable(lazy(() => import("../pages/PostSearch")));
const RecruitmentSolution = Loadable(
  lazy(() => import("../pages/RecruitmentSolution"))
);
const Rekommendation = Loadable(lazy(() => import("../pages/Rekommendation")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const Faqs = Loadable(lazy(() => import("../pages/Faqs")));
const Page500 = Loadable(lazy(() => import("../pages/Page500")));
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
