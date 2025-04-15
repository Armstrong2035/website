// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD2mT9KA6N7zTRsz-TUDnpfllyBfnQTQH4",
  authDomain: "subarashi-real-estate.firebaseapp.com",
  projectId: "subarashi-real-estate",
  storageBucket: "subarashi-real-estate.firebasestorage.app",
  messagingSenderId: "284995572575",
  appId: "1:284995572575:web:4019d4060000a3a8c81cea",
  measurementId: "G-LMKH4GB7LP",

  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;

// Only initialize analytics on the client side
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }

// Export the app instance
export { app };
export default app;
