import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

async function sendListingToFirestore(listing, xml, listingId) {
  try {
    const listingDoc = {
      id: listingId,
      jsonData: listing, // Full listing object
      xmlData: xml, // XML string
      dateCreated: new Date(),
      status: "active",
      lastUpdated: new Date(),
    };

    const listingsRef = doc(db, "listings", listingId);
    await setDoc(listingsRef, listingDoc);

    console.log("Document written with ID:", listingId);
    return listingId;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
}

export { sendListingToFirestore };
