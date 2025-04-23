"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useListingsStore = create(
  persist(
    (set) => ({
      leaseListings: [],
      salesListings: [],
      setLeaseListings: (listings) => set({ leaseListings: listings }),
      setSalesListings: (listings) => set({ salesListings: listings }),
    }),
    {
      name: "listings-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
