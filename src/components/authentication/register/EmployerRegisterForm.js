import * as Yup from "yup";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useSnackbar } from "notistack";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import closeFill from "@iconify/icons-eva/close-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Alert,
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
// hooks
import useAuth from "../../../hooks/useAuth";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
//
import { MIconButton } from "../../@material-extend";

// ----------------------------------------------------------------------

export default function EmployerRegisterForm() {
  const { employerRegister } = useAuth();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    orgName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Organization name required"),
    contactName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Contact name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      orgName: "",
      contactName: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await employerRegister(
          values.email,
          values.password,
          values.orgName,
          values.contactName
        );

        enqueueSnackbar("Register success", {
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

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit}</Alert>
          )}

          <TextField
            fullWidth
            label="Name of the organization"
            {...getFieldProps("orgName")}
            error={Boolean(touched.orgName && errors.orgName)}
            helperText={touched.orgName && errors.orgName}
            required
          />

          <TextField
            fullWidth
            label="Contact person"
            {...getFieldProps("contactName")}
            error={Boolean(touched.contactName && errors.contactName)}
            helperText={touched.contactName && errors.contactName}
            required
          />

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email ID"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            required
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            required
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            {...getFieldProps("password")}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            required
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            SUBMIT
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
