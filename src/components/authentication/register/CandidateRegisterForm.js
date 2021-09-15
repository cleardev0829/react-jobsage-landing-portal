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
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
// hooks
import useAuth from "../../../hooks/useAuth";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
//
import { MIconButton } from "../../@material-extend";
import countries from "./countries";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Full Name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    phoneNumber: Yup.string().required("Phone Number required"),
    country: Yup.string().required("Phone Number required"),
    job: Yup.string().required("Desired Job required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      phoneNumber: "",
      country: "",
      job: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await register(values.fullname, values.email, values.password);
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
            label="Enter your Full Name here"
            {...getFieldProps("fullname")}
            error={Boolean(touched.fullname && errors.fullname)}
            helperText={touched.fullname && errors.fullname}
            required
          />

          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Enter your Active Email ID here"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            required
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Enter your Password"
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

          {/* <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            {...getFieldProps("password")}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            required
          /> */}

          <TextField
            fullWidth
            type="phone"
            label="Where recruiters can contact you"
            {...getFieldProps("phoneNumber")}
            error={Boolean(touched.phoneNumber && errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            required
          />

          <TextField
            select
            fullWidth
            label="Tell us about your country of residence"
            placeholder="Country"
            {...getFieldProps("country")}
            SelectProps={{ native: true }}
            error={Boolean(touched.country && errors.country)}
            helperText={touched.country && errors.country}
            required
          >
            <option value="" />
            {countries.map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))}
          </TextField>

          <FormControlLabel
            control={<Checkbox />}
            label="Abailability to work"
          />

          <TextField
            fullWidth
            autoComplete="job"
            type="text"
            label="Please put in your Desired Job Preference"
            {...getFieldProps("job")}
            error={Boolean(touched.job && errors.job)}
            helperText={touched.job && errors.job}
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
