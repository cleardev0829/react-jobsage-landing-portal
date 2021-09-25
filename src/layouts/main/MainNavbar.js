import { NavLink as RouterLink, useLocation } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  Stack,
  Typography,
} from "@material-ui/core";
import useOffSetTop from "../../hooks/useOffSetTop";
import Logo from "../../components/Logo";
import { MHidden } from "../../components/@material-extend";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import { PATH_AUTH, PATH_PAGE } from "src/routes/paths";
import useAuth from "../../hooks/useAuth";
import AccountPopover from "../dashboard/AccountPopover";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const auth = useAuth();
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <AppBar color={isHome ? "transparent" : "default"} sx={{ boxShadow: 0 }}>
      <ToolbarStyle
        disableGutters
        sx={{
          bgcolor: "background.default",
          // height: { md: APP_BAR_DESKTOP - 16 }
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Stack spacing={0.5} direction="column" textAlign="center">
            <Button
              size="middle"
              to={PATH_AUTH.candidateLogin}
              sx={{ borderRadius: 50, mx: 2 }}
              color="secondary"
              variant="outlined"
              component={RouterLink}
            >
              Candidate Sign In/Sign up
            </Button>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              <Stack spacing={0.5} direction="column" textAlign="center">
                <Button
                  size="middle"
                  to={PATH_AUTH.employerLogin}
                  sx={{ borderRadius: 50 }}
                  color="secondary"
                  variant="outlined"
                  component={RouterLink}
                >
                  Employer Sign In/Sign up
                </Button>
                <Typography variant="h6">
                  Sign up for 15 days free trial
                </Typography>
              </Stack>
              <Stack spacing={0.5} direction="column">
                <Button
                  size="middle"
                  to={PATH_PAGE.demo}
                  sx={{ borderRadius: 50 }}
                  color="secondary"
                  variant="contained"
                  component={RouterLink}
                >
                  Demo
                </Button>
                <Typography variant="h6">&nbsp;</Typography>
              </Stack>
            </Stack>
          </MHidden>
          <MHidden width="mdUp">
            <MenuMobile
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>

          <Box sx={{ flexGrow: 1 }} />
          {auth.isAuthenticated && (
            <Box sx={{ position: "absolute", right: 30 }}>
              <AccountPopover />
            </Box>
          )}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
