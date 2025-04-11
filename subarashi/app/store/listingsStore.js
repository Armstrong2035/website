"use client"

import { create } from "zustand"

export const useListingStore = create((set) => ({
  listings: [],
  setListings: (listings) => set({ listings }),
}))
