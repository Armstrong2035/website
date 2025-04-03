// app/zustand/areaGuidesStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAreaGuidesStore = create(
  persist(
    (set, get) => ({
      guides: [], // array of area guides from Notion

      // Set all guides (used when receiving from server)
      setGuides: (newGuides) => set({ guides: newGuides }),

      // Clear guides (optional, could be useful for cleanup)
      clearGuides: () => set({ guides: [] }),

      // Get featured guides (first 4 or N guides)
      getFeaturedGuides: (count = 4) => {
        return get().guides.slice(0, count);
      },
    }),
    {
      name: "area-guides-storage", // Key for localStorage
      getStorage: () => localStorage, // Use localStorage for persistence
    }
  )
);
