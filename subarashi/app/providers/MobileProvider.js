"use client";

import { createContext, useContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const MobileContext = createContext();

export function MobileProvider({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Or whichever breakpoint you prefer

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
}

export function useIsMobile() {
  return useContext(MobileContext);
}
