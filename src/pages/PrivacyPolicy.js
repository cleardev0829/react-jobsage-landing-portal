// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../components/Page";
// components
import { Container, Grid } from "@material-ui/core";
import PrivacyPolicyHtml from "src/components/_external-pages/privacy-policy/PrivacyPolicyHtml";

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function PrivacyPolicy() {
  return (
    <RootStyle title="About us | Minimal-UI">
      <Container maxWidth="lg">
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", alignItems: "center", px: 4, py: 10 }}
        >
          <ContentStyle>
            <PrivacyPolicyHtml />
          </ContentStyle>
        </Grid>
      </Container>
    </RootStyle>
  );
}
