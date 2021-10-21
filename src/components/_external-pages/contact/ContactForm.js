import * as Yup from "yup";
// import { useState } from "react";
import { Icon } from "@iconify/react";
import { useSnackbar } from "notistack";
import { useFormik, Form, FormikProvider } from "formik";
// import eyeFill from "@iconify/icons-eva/eye-fill";
import closeFill from "@iconify/icons-eva/close-fill";
// material
import { Button, Typography, TextField, Stack, Alert } from "@material-ui/core";
//
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import { MIconButton } from "../../@material-extend";
import { varFadeInUp, MotionInView } from "../../animate";
import axios from "axios";
import { LoadingButton } from "@material-ui/lab";
// ----------------------------------------------------------------------

export default function ContactForm() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phone: Yup.string()
      .min(2, "Too Short!")
      .required("Phone number is required"),
    message: Yup.string().min(2, "Too Short!").required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await axios.post(
          "https://react-deviceapp-backend.herokuapp.com/email/sendMailOverHTTP",
          {
            from: "irekommend@gmail.com",
            email: "hello@irekommend.com",
            subject: "Demo",
            emailBody: `<p>Name: ${values.name}</p><p>Email: ${values.email}</p><p>Phone Number: ${values.phone}</p><p>Message: ${values.message}</p>`,
          }
        );

        enqueueSnackbar("Email success", {
          variant: "success",
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    },
  });

  const {
    errors,
    touched,
    values,
    handleSubmit,
    isSubmitting,
    getFieldProps,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3">
              Feel free to contact us. <br />
              We'll be glad to hear from you.
            </Typography>
          </MotionInView>

          <Stack spacing={3}>
            <MotionInView variants={varFadeInUp}>
              <TextField
                fullWidth
                label="Name"
                {...getFieldProps("name")}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
                required
              />
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <TextField
                fullWidth
                autoComplete="email"
                type="email"
                label="Email"
                {...getFieldProps("email")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                required
              />
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <TextField
                fullWidth
                autoComplete="phone"
                type="phone"
                label="Phone Number"
                {...getFieldProps("phone")}
                error={Boolean(touched.phone && errors.phone)}
                helperText={touched.phone && errors.phone}
                required
              />
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <TextField
                fullWidth
                label="Enter your message here"
                {...getFieldProps("message")}
                error={Boolean(touched.message && errors.message)}
                helperText={touched.message && errors.message}
                multiline
                rows={4}
                required
              />
            </MotionInView>
          </Stack>

          <MotionInView variants={varFadeInUp}>
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Submit Now
            </LoadingButton>
          </MotionInView>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
