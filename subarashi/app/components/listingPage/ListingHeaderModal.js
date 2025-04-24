import React, { useState } from "react";
import { Box, IconButton, Typography, Modal, Container } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import typographyStyles from "../../styles";

export default function ListingHeaderModal({ listing, open, setOpen }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (!listing || !listing.media || !listing.media.length) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === listing.media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    if (!listing || !listing.media || !listing.media.length) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? listing.media.length - 1 : prevIndex - 1
    );
  };

  // Reset the current image index when the modal is opened
  React.useEffect(() => {
    if (open) {
      setCurrentImageIndex(0);
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",

        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        {/* Close button (top right) */}
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 20,
            top: 20,
            bgcolor: "#005244",
            "&:hover": { bgcolor: "rgba(0,0,0,0.2)" },
          }}
        >
          <CloseIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>

        {/* Main image container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={listing?.media?.[currentImageIndex] || ""}
            alt={listing?.title || "Property image"}
            sx={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
            }}
          />

          {/* Navigation buttons */}
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#005244",
              "&:hover": { bgcolor: "rgba(0,0,0,0.2)" },
            }}
          >
            <WestIcon sx={{ color: "white" }} />
          </IconButton>

          <IconButton
            onClick={handleNextImage}
            sx={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#005244",
              "&:hover": { bgcolor: "rgba(0,0,0,0.2)" },
            }}
          >
            <EastIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "space-between",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ ...typographyStyles.bodyLarge, color: "#005244" }}>
            {listing.location.building}, {listing.location.locality},
            {listing.location.city}
          </Typography>
          <Typography
            sx={{ ...typographyStyles.bodyLarge, color: "#005244" }}
          >{`${currentImageIndex + 1}/${listing.media.length + 1}`}</Typography>
        </Container>
      </Box>
    </Modal>
  );
}
