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
  Grid2,
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

// Initialize Firestore using the app instance
const db = getFirestore(app);

const ButtonModal = ({
  buttonText,
  buttonStyle,
  buttonColor,
  variantStyle,
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle checkbox changes
      const checkboxValue = e.target.value;
      setFormData((prevData) => {
        if (checked) {
          // Add the value to interests array if checked
          return {
            ...prevData,
            interests: [...prevData.interests, checkboxValue],
          };
        } else {
          // Remove the value from interests array if unchecked
          return {
            ...prevData,
            interests: prevData.interests.filter(
              (interest) => interest !== checkboxValue
            ),
          };
        }
      });
    } else {
      // Handle regular input changes
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add form data to Firestore
      await addDoc(collection(db, "leads"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        propertyType: formData.propertyType,
        message: formData.message,
        interests: formData.interests,
        createdAt: serverTimestamp(),
        status: "new",
        source: "website",
        project: "Null", // Added to match FirebaseForm
      });

      // Add form data to ClickUp - Mirroring the FirebaseForm implementation
      await fetch("/api/add-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          unitPreference: formData.propertyType, // Mapping to similar field
          message: formData.message,
          interests: formData.interests.join(", "), // Convert array to string for ClickUp
        }),
      });

      // Show success message
      setSnackbar({
        open: true,
        message: "Thank you! Your information has been submitted successfully.",
        severity: "success",
      });

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyType: "",
        message: "",
        interests: [],
      });

      // Fire Google Ads conversion tracking after successful form submission
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-16909263453/jTrDCNHE5qYaEN3E-_4-",
        });
        console.log("Google Ads conversion tracking fired");
      }

      // Fire Facebook Pixel conversion event after successful form submission
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead");
        console.log("Facebook Pixel conversion event fired");
      }

      // Close modal after successful submission
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
        variant={variantStyle}
        sx={{ ...buttonStyle, color: hover ? "#F2FFC2" : buttonColor }}
        className={`${variantStyle}-button`}
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
          <Grid2
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
            <Grid2
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
            </Grid2>

            <Grid2 item size={{ sm: 12, md: 7 }}>
              <Box component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
                <Grid2 container spacing={5} direction={"row"}>
                  <Grid2 item size={{ md: 6 }}>
                    <EmailInput
                      placeholder="FIRST NAME"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
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

                    <EmailInput
                      placeholder="LAST NAME"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
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
                  </Grid2>
                  <Grid2 item size={{ md: 6 }}>
                    <EmailInput
                      placeholder="EMAIL ADDRESS"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      fullWidth
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
                    <EmailInput
                      placeholder="PHONE NUMBER"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      fullWidth
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
                  </Grid2>
                </Grid2>

                <Grid2 container>
                  {checkboxes.map((checkbox) => (
                    <Grid2 item size={{ xs: 12, md: 4 }} key={checkbox}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value={checkbox}
                              checked={formData.interests.includes(checkbox)}
                              onChange={handleChange}
                              name="interests"
                              sx={{
                                boxShadow: "none",
                                "&.MuiCheckbox-root": {
                                  boxShadow: "none",
                                },
                              }}
                            />
                          }
                          label={checkbox}
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              ...typographyStyles.bodyMedium,
                              fontSize: "16px",
                            },
                          }}
                        />
                      </FormGroup>
                    </Grid2>
                  ))}
                </Grid2>

                <TextField
                  label="MESSAGE"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  fullWidth
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      ...typographyStyles.bodyMedium,
                      fontSize: "16px",
                    },
                    mt: 5,
                  }}
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
            </Grid2>

            <Grid2 item size={{ sm: 12, md: 1 }} sx={{}}>
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
            </Grid2>

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
          </Grid2>
        </Box>
      </Modal>
    </>
  );
};

export default ButtonModal;
