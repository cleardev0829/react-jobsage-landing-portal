import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { PATH_PAGE } from "src/routes/paths";
import useAuth from "../hooks/useAuth";

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const { isAuthenticated, user } = useAuth();
  console.log(isAuthenticated, user);

  if (isAuthenticated) {
    return <Navigate to={`${PATH_PAGE.postSearch}/${user.role}`} />;
  }

  return <>{children}</>;
}
