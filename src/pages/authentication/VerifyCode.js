import { Icon } from "@iconify/react";
import { Link as RouterLink } from "react-router-dom";
import arrowIosBackFill from "@iconify/icons-eva/arrow-ios-back-fill";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Button,
  // Link,
  Container,
  Typography,
} from "@material-ui/core";
// layouts
import LogoOnlyLayout from "../../layouts/LogoOnlyLayout";
// routes
import { PATH_AUTH } from "../../routes/paths";
// components
import Page from "../../components/Page";
// import { VerifyCodeForm } from "../../components/authentication/verify-code";
// hooks
// import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function VerifyCode() {
  // const { sendEmailVerification } = useAuth();
  const routeParams = useParams({});

  return (
    <RootStyle title="Verify | Minimal UI">
      <LogoOnlyLayout />

      <Container>
        <Box sx={{ maxWidth: 480, mx: "auto" }}>
          <Button
            size="small"
            component={RouterLink}
            to={PATH_AUTH[`${routeParams.from.toLowerCase()}Login`]}
            startIcon={<Icon icon={arrowIosBackFill} width={20} height={20} />}
            sx={{ mb: 3 }}
          >
            Back
          </Button>

          <Typography variant="h3" paragraph>
            Please check your email!
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {/* We have emailed a 6-digit confirmation code to acb@domain, please
            enter the code in below box to verify your email. */}
            Verify your E-Mail: Check you E-Mails (Spam folder included) for a
            confirmation E-Mail or send another confirmation E-Mail.
          </Typography>

          <Box sx={{ mt: 5, mb: 3 }}>{/* <VerifyCodeForm /> */}</Box>

          {/* <Typography variant="body2" align="center"> */}
          {/* Don’t have a code? &nbsp; */}
          {/* <Link
            variant="subtitle2"
            // underline="none"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              sendEmailVerification();
            }}
          >
            Send confirmation E-Mail
          </Link> */}
          {/* </Typography> */}
        </Box>
      </Container>
    </RootStyle>
  );
}
