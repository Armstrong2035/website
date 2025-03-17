// src/styles/filterStyles.js

export const filterStyles = {
  // Container styles
  filterContainer: {
    backgroundColor: "#005244",
    color: "white",
    py: 3,
    mb: 4,
  },

  filterInnerContainer: {
    pt: 3,
    pb: 3,
  },

  // Input and select styles
  selectStyles: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255,255,255,0.3)",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },

  inputFieldStyles: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255,255,255,0.3)",
    },
  },

  inputLabelStyles: {
    ml: 1,
    mb: 0.5,
  },

  // Button styles
  searchButton: {
    py: 1,
    backgroundColor: "#F2FFC2",
    color: "#005244",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#E0EEB1",
    },
  },

  // Hero container styles
  heroContainer: {
    position: "relative",
  },

  heroInnerContainer: {
    height: "70vh",
    width: "100%",
    backgroundColor: "#005244",
  },

  // Listings container
  listingsContainer: {
    mb: 8,
  },
};
