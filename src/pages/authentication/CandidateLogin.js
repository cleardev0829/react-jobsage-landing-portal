import { Link as RouterLink } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  // Card,
  Paper,
  Stack,
  Link,
  // Alert,
  // Tooltip,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
// routes
import { PATH_AUTH } from "../../routes/paths";
// hooks
import useAuth from "../../hooks/useAuth";
// layouts
// import AuthLayout from "../../layouts/AuthLayout";
// components
import Page from "../../components/Page";
// import { MHidden } from "../../components/@material-extend";
import { CandidateLoginForm } from "../../components/authentication/login";
import AuthFirebaseSocials from "../../components/authentication/AuthFirebaseSocial";
// import LogoOnlyLayout from "src/layouts/LogoOnlyLayout";
import Logo from "src/components/Logo";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: 800,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
  textAlign: "center",
}));

// ----------------------------------------------------------------------

export default function CandidateLogin() {
  const { method, login } = useAuth();

  const handleLoginAuth0 = async () => {
    try {
      await login();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootStyle title="Login | Minimal-UI">
      <Container>
        <ContentStyle>
          <Paper
            sx={{
              py: 3,
              px: 16,
              width: "100%",
              borderRadius: 2,
              zIndex: (theme) => theme.zIndex.modal,
              boxShadow: (theme) => theme.customShadows.z20,
            }}
          >
            <Stack
              direction="column"
              alignItems="center"
              spacing={2}
              sx={{ mb: 4 }}
            >
              <RouterLink to="/">
                <Logo />
              </RouterLink>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h3" gutterBottom>
                  Log in to IRekommend
                </Typography>
              </Box>
            </Stack>

            {method === "firebase" && <AuthFirebaseSocials />}

            {method !== "auth0" ? (
              <CandidateLoginForm />
            ) : (
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleLoginAuth0}
              >
                Login with Candidate
              </Button>
            )}

            <Stack
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <Link
                component={RouterLink}
                variant="body2"
                to={PATH_AUTH.resetPassword}
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                <span style={{ fontWeight: 700 }}>Forgot your password?</span>
              </Link>
              <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                sx={{ mt: 3 }}
              >
                <span style={{ fontWeight: 500 }}>
                  Not registered on IRekommend yet?
                </span>
              </Typography>

              <Link
                variant="subtitle2"
                component={RouterLink}
                to={PATH_AUTH.candidateRegister}
                color="secondary"
                sx={{ mt: 1 }}
              >
                <span style={{ fontWeight: 600 }}>Create your account</span>
              </Link>

              <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                sx={{ mt: 3 }}
              >
                <span style={{ fontWeight: 500 }}>
                  By login you agree to the terms and conditions & Privacy
                  policy of IRekommend
                </span>
              </Typography>
            </Stack>
          </Paper>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
