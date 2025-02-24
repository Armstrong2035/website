// stores/useListingsStore.js
import { create } from "zustand";

export const useListingsStore = create((set) => ({
  listings: [], // array of complete listing documents from Firestore

  // Set all listings (used when receiving from server)
  setListings: (listings) => set({ listings }),

  // Clear listings (optional, could be useful for cleanup)
  clearListings: () => set({ listings: [] }),
}));
