// firebaseUtils/app.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase only on client side and with proper error handling
let app;
let db;

try {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

// Modified function with error handling and fallback to mockListings
export async function receiveListingsFromFirestore() {
  // Import mockListings for fallback
  const { mockListings } = await import("../public/mockListings");

  try {
    // Check if Firebase is properly initialized
    if (!db) {
      console.warn("Firebase not initialized, using mock data");
      return mockListings;
    }

    const listingsRef = collection(db, "listings");
    const querySnapshot = await getDocs(listingsRef);

    if (querySnapshot.empty) {
      console.log("No listings found in Firestore, using mock data");
      return mockListings;
    }

    const listings = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      dateCreated: doc.data().dateCreated?.toDate(),
      lastUpdated: doc.data().lastUpdated?.toDate(),
    }));

    console.log(`Retrieved ${listings.length} listings from Firestore`);
    return listings;
  } catch (error) {
    console.error("Error fetching listings from Firestore:", error.message);
    console.log("Falling back to mock data");
    return mockListings;
  }
}

export async function sendListingToFirestore(listing, xml, listingId) {
  try {
    // Check if Firebase is properly initialized
    if (!db) {
      console.warn("Firebase not initialized, cannot save listing");
      return null;
    }

    const listingDoc = {
      id: listingId,
      jsonData: listing,
      xmlData: xml,
      dateCreated: new Date(),
      status: "active",
      lastUpdated: new Date(),
    };

    const listingsRef = doc(db, "listings", listingId);
    await setDoc(listingsRef, listingDoc);

    console.log("Document written with ID:", listingId);
    return listingId;
  } catch (error) {
    console.error("Error adding document:", error.message);
    throw error;
  }
}
