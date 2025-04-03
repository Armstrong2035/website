// app/zustand/areaGuidesStore.js
import { create } from "zustand";

export const useAreaGuidesStore = create((set) => ({
  guides: [], // array of area guides from Notion

  // Set all guides (used when receiving from server)
  setGuides: (guides) => set({ guides }),

  // Clear guides (optional, could be useful for cleanup)
  clearGuides: () => set({ guides: [] }),

  // Get featured guides (first 4 or N guides)
  getFeaturedGuides: (count = 4) => {
    const { guides } = useAreaGuidesStore.getState();
    return guides.slice(0, count);
  },
}));
