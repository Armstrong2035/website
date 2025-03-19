"use client";
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
  Stack,
  Modal,
} from "@mui/material";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import app from "../../../firebaseUtils/app";

// Initialize Firestore using the app instance
const db = getFirestore(app);

const style = {
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 600,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 0,
    outline: "none",
  },
};

const ButtonModal = ({ buttonText, buttonStyle }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add form data to Firestore
      await addDoc(collection(db, "leads"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new",
        source: "website",
        project: "Subarashi Real Estate",
      });

      // Show success message
      setSnackbar({
        open: true,
        message: "Thank you! Your information has been submitted successfully.",
        severity: "success",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        message: "",
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
      <Button variant="contained" onClick={handleOpen} sx={buttonStyle}>
        {buttonText}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style.modalContainer}>
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              borderRadius: "8px",
              bgcolor: "#005244",
              color: "white",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{ pt: 4, px: 4, fontWeight: 500 }}
            >
              Register Your Interest
            </Typography>

            <Typography variant="body1" align="center" sx={{ mt: 2, px: 4 }}>
              Fill in your details below and our property specialist will
              contact you soon"
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
              <Stack spacing={3}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                    },
                  }}
                />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                    },
                  }}
                />

                <TextField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                    },
                  }}
                />

                <TextField
                  select
                  label="Property Interest"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                    },
                  }}
                >
                  <MenuItem value="Apartment">Apartment</MenuItem>
                  <MenuItem value="Villa">Villa</MenuItem>
                  <MenuItem value="Townhouse">Townhouse</MenuItem>
                  <MenuItem value="Penthouse">Penthouse</MenuItem>
                  <MenuItem value="Commercial">Commercial</MenuItem>
                </TextField>

                <TextField
                  label="Your Message (Optional)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: "#F2FFC2",
                    color: "#005244",
                    borderRadius: 10,
                    p: 2,
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress
                      size={24}
                      sx={{ color: backgroundColor }}
                    />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Stack>
            </Box>
          </Paper>

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
        </Box>
      </Modal>
    </>
  );
};

export default ButtonModal;
