"use client"

import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useLeastListingStore = create(
  persist(
    (set) => ({
      listings: [],
      setListings: (listings) => set({ listings }),
    }),
    {
      name: "lease-listing-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
