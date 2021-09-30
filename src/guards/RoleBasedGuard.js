import PropTypes from "prop-types";
import { Container, Alert, AlertTitle } from "@material-ui/core";
import useAuth from "../hooks/useAuth";
import { experimentalStyled as styled } from "@material-ui/core/styles";

// ----------------------------------------------------------------------

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.array,
  children: PropTypes.node,
};

const RootStyle = styled(Container)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(16),
  },
}));

export default function RoleBasedGuard({ accessibleRoles, children }) {
  const { isAuthenticated, user } = useAuth();
  const currentRole = user.role;
  const accesibleRole = accessibleRoles[0];

  if (
    !isAuthenticated ||
    (isAuthenticated && !accessibleRoles.includes(currentRole))
  ) {
    return (
      <RootStyle>
        <Alert severity="error">
          <AlertTitle>Permission Denied</AlertTitle>
          {`You do not have permission to access this page. please login with ${accesibleRole}`}
        </Alert>
      </RootStyle>
    );
  }

  return <>{children}</>;
}
