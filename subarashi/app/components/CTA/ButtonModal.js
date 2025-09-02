"use client";
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
  FormGroup,
  Grid,
  Modal,
  IconButton,
} from "@mui/material";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import app from "../../../firebaseUtils/app";
import typographyStyles from "../../styles";
import { EmailInput } from "../footer/new-footer";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import NavBar from "../appBar/AppBar";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { styled } from "@mui/material/styles";

// Initialize Firestore using the app instance
const db = getFirestore(app);

// This mimics your EmailInput style
export const StyledPhoneInput = styled(PhoneInput)(({ theme }) => ({
  width: "100%",
  ...typographyStyles.bodyMedium,
  fontSize: "16px",
  border: "none",
  borderBottom: `2px solid ${theme.palette.divider}`,
  padding: "18.5px 14px",
  outline: "none",

  "& input": {
    border: "none",
    outline: "none",
    fontSize: "16px",
    fontWeight: 500,
    color: "black",
    width: "100%",
    background: "transparent",
  },

  "&:hover": {
    borderBottomColor: theme.palette.text.primary,
  },

  "&:focus-within": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },

  ".PhoneInputCountry": {
    marginRight: "12px",
  },
}));

const ButtonModal = ({
  buttonText,
  buttonStyle,
  buttonColor,
  variant,
  hover,
}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
    interests: [],
  });

  const checkboxes = [
    "Buying",
    "Rental",
    "Selling",
    "Other",
    "Property Management",
    "Holiday Homes",
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      propertyType: "",
      message: "",
      interests: [],
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // console.log("Form data:", data);

      await addDoc(collection(db, "leads"), {
        ...data,
        createdAt: serverTimestamp(),
        status: "new",
        source: "website",
        project: "Null",
      });

      await fetch("/api/add-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          unitPreference: data.propertyType,
          message: data.message,
          interests: data.interests.join(", "),
        }),
      });

      setSnackbar({
        open: true,
        message: "Thank you! Your information has been submitted successfully.",
        severity: "success",
      });

      reset();

      if (typeof window !== "undefined") {
        window.gtag?.("event", "conversion", {
          send_to: "AW-16909263453/jTrDCNHE5qYaEN3E-_4-",
        });
        window.fbq?.("track", "Lead");
      }

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSnackbar({
        open: true,
        message:
          "There was an error submitting your information. Please try again.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant={variant}
        sx={{
          ...buttonStyle,
          color: hover ? "#F2FFC2" : buttonColor,
          textTransform: "none",
        }}
      >
        {buttonText}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          height: "100vh",
        }}
      >
        <Box sx={{ width: "100%", height: "100%" }}>
          <NavBar
            color="#005244"
            hoverColor="#005244"
            hoverBackground={"#FFFFFF"}
            buttonColor={"#005244"}
          />
          <Grid
            container
            sx={{
              backgroundColor: "white",
              pr: 10,
              pl: 10,
              pt: 10,
              width: "100%",
              height: "100%",
            }}
          >
            <Grid
              item
              size={{ sm: 12, md: 4 }}
              id={"modal-title"}
              sx={{ pt: 10 }}
            >
              <Typography
                sx={{
                  ...typographyStyles.bodyMedium,
                  fontSize: "16px",
                  fontWeight: 500,
                  pt: 4,
                  px: 4,
                  fontWeight: 500,
                  textAlign: "left",
                }}
              >
                Register Your Interest
              </Typography>

              <Typography
                variant="body1"
                align="center"
                sx={{
                  ...typographyStyles.bodyMedium,
                  fontSize: "16px",
                  fontWeight: 500,
                  mt: 2,
                  px: 4,
                  textAlign: "left",
                }}
              >
                Fill in your details below and our property specialist will
                contact you soon
              </Typography>
            </Grid>

            <Grid item sm={12} md={7}>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ p: 4 }}
              >
                <Grid container spacing={5} direction={"row"}>
                  <Grid item md={6}>
                    <Controller
                      name="firstName"
                      control={control}
                      rules={{ required: "First name is required" }}
                      render={({ field }) => (
                        <EmailInput
                          {...field}
                          placeholder="FIRST NAME"
                          fullWidth
                          variant="outlined"
                          error={!!errors.firstName}
                          helperText={errors.firstName?.message}
                          sx={{
                            fontSize: "16px",
                            lineHeight: "107.7%",
                            mb: 3,
                            "& input::placeholder": {
                              ...typographyStyles.bodyMedium,
                              fontSize: "16px",
                              fontWeight: 500,
                              color: "black",
                            },
                          }}
                        />
                      )}
                    />

                    <Controller
                      name="lastName"
                      control={control}
                      rules={{ required: "Last name is required" }}
                      render={({ field }) => (
                        <EmailInput
                          {...field}
                          placeholder="LAST NAME"
                          fullWidth
                          variant="outlined"
                          error={!!errors.lastName}
                          helperText={errors.lastName?.message}
                          sx={{
                            fontSize: "16px",
                            lineHeight: "107.7%",
                            mb: 3,
                            "& input::placeholder": {
                              ...typographyStyles.bodyMedium,
                              fontSize: "16px",
                              fontWeight: 500,
                            },
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      }}
                      render={({ field }) => (
                        <EmailInput
                          {...field}
                          placeholder="EMAIL ADDRESS"
                          type="email"
                          fullWidth
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          sx={{
                            fontSize: "16px",
                            lineHeight: "107.7%",
                            mb: 3,
                            "& input::placeholder": {
                              ...typographyStyles.bodyMedium,
                              fontSize: "16px",
                              fontWeight: 500,
                            },
                          }}
                        />
                      )}
                    />

                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: "Phone number is required" }}
                      render={({ field }) => (
                        <>
                          <StyledPhoneInput
                            {...field}
                            placeholder="PHONE NUMBER"
                            defaultCountry="AE"
                            enableSearch
                            sx={{
                              fontSize: "16px",
                              lineHeight: "107.7%",
                              mb: 3,
                              "& input::placeholder": {
                                ...typographyStyles.bodyMedium,
                                fontSize: "16px",
                                fontWeight: 500,
                              },
                            }}
                            onChange={(phone) => field.onChange(phone)}
                            disableDropdown={false}
                            preferredCountries={["ng", "us", "gb"]}
                          />
                          {errors.phone && (
                            <Typography
                              color="error"
                              fontSize="0.8rem"
                              sx={{ mt: -2 }}
                            >
                              {errors.phone.message}
                            </Typography>
                          )}
                        </>
                      )}
                    />
                  </Grid>
                </Grid>

                <Controller
                  name="interests"
                  control={control}
                  rules={{
                    validate: (value) =>
                      value && value.length > 0
                        ? true
                        : "Please select at least one interest",
                  }}
                  render={({ field }) => (
                    <>
                      <FormGroup>
                        <Grid container>
                          {checkboxes.map((interest) => (
                            <Grid item xs={12} md={4} key={interest}>
                              <FormControlLabel
                                key={interest}
                                control={
                                  <Checkbox
                                    checked={field.value.includes(interest)}
                                    onChange={(e) => {
                                      const checked = e.target.checked;
                                      if (checked) {
                                        field.onChange([
                                          ...field.value,
                                          interest,
                                        ]);
                                      } else {
                                        field.onChange(
                                          field.value.filter(
                                            (item) => item !== interest
                                          )
                                        );
                                      }
                                    }}
                                  />
                                }
                                label={interest}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </FormGroup>
                      {errors.interests && (
                        <Typography color="error" fontSize="0.8rem">
                          {errors.interests.message}
                        </Typography>
                      )}
                    </>
                  )}
                />

                <Controller
                  name="message"
                  control={control}
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="MESSAGE"
                      multiline
                      rows={3}
                      fullWidth
                      error={!!errors.message}
                      helperText={errors.message?.message}
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          ...typographyStyles.bodyMedium,
                          fontSize: "16px",
                        },
                        mt: 5,
                      }}
                    />
                  )}
                />

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: "#005244",
                    color: "#F2FFC2",
                    mt: 2,
                    pl: 10,
                    pr: 10,
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} sx={{ color: "#005244" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Box>
            </Grid>

            <Grid item sm={12} md={1} sx={{}}>
              <IconButton
                onClick={handleClose}
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  p: 2,
                  alignSelf: "flex-end",
                  color: "black",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>

            <Snackbar
              open={snackbar.open}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={handleSnackbarClose}
                severity={snackbar.severity}
                sx={{ width: "100%" }}
              >
                {snackbar.message}
              </Alert>
            </Snackbar>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ButtonModal;
