"use client"

import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useListingStore = create(
  persist(
    (set) => ({
      listings: [],
      setListings: (listings) => set({ listings }),
    }),
    {
      name: "listing-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
