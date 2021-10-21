// import faker from "faker";
// import { useRef } from "react";
// import Slider from "react-slick";
import PropTypes from "prop-types";
// import { Icon } from "@iconify/react";
// import twitterFill from "@iconify/icons-eva/twitter-fill";
// import linkedinFill from "@iconify/icons-eva/linkedin-fill";
// import facebookFill from "@iconify/icons-eva/facebook-fill";
// import roundArrowRightAlt from "@iconify/icons-ic/round-arrow-right-alt";
// import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
// material
// import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  Card,
  // Button,
  Container,
  Typography,
  // IconButton,
  // Divider,
  Grid,
} from "@material-ui/core";
//
import {
  // varFadeIn,
  varFadeInUp,
  MotionInView,
  // varFadeInDown,
} from "../../animate";
// import { CarouselControlsArrowsBasic2 } from "../../carousel";
// import { MHidden } from "../../@material-extend";
import {
  ContactForm,
  // ContactMap
} from "../contact";

MemberCard.propTypes = {
  member: PropTypes.object,
};

function MemberCard({ member }) {
  const { name, role, avatar } = member;
  return (
    <Card key={name} sx={{ p: 3, mx: 1.5 }}>
      <Box
        component="img"
        src={avatar}
        sx={{ width: "100%", borderRadius: 1 }}
      />
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
        {role}
      </Typography>
    </Card>
  );
}

export default function ContactUsWithMap() {
  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 4, textAlign: "center" }}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3" color="primary">
          {`Contact `}
          <span style={{ fontWeight: 400 }}>Us</span>
        </Typography>
      </MotionInView>

      <Container sx={{ my: 10 }}>
        <Grid
          container
          spacing={10}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <ContactMap />
          </Grid> */}
        </Grid>
      </Container>
    </Container>
  );
}
