import React, { useState, createContext, useContext } from "react";

// Create Context
const AreaGuidesContext = createContext();

export default function AreaGuidesProvider({ children }) {
  // State to hold area guides
  const [guides, setGuides] = useState([]);

  // Function to set guides
  const setAreaGuides = (newGuides) => {
    setGuides(newGuides);
  };

  // Function to clear guides
  const clearAreaGuides = () => {
    setGuides([]);
  };

  // Context value
  const contextValue = {
    guides,
    setAreaGuides,
    clearAreaGuides,
  };

  return (
    <AreaGuidesContext.Provider value={contextValue}>
      {children}
    </AreaGuidesContext.Provider>
  );
}

// Custom hook for consuming the context
export const useAreaGuides = () => {
  return useContext(AreaGuidesContext);
};
