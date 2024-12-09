import { getAnalytics, isSupported } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC40f4EjPNB8YQOe488yQrl8Z2cyFirWrs",
  authDomain: "nexorithnepal-ac547.firebaseapp.com",
  projectId: "nexorithnepal-ac547",
  storageBucket: "nexorithnepal-ac547.firebasestorage.app",
  messagingSenderId: "89262865137",
  appId: "1:89262865137:web:245fccc6d28135a6b1c750",
  measurementId: "G-ZVV2MXQTX1",
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Services
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Analytics (Browser-only)
export const analyticsPromise = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    } else {
      console.warn("Analytics not supported in this environment.");
    }
  } else {
    console.warn("Analytics not initialized. Server-side rendering detected.");
    return null;
  }
};
