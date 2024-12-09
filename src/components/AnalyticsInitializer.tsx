"use client";

// Mark this file as a Client Component
import { useEffect } from "react";

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// Correct import for Firebase Analytics

const firebaseConfig = {
  apiKey: "AIzaSyC40f4EjPNB8YQOe488yQrl8Z2cyFirWrs",
  authDomain: "nexorithnepal-ac547.firebaseapp.com",
  projectId: "nexorithnepal-ac547",
  storageBucket: "nexorithnepal-ac547.firebasestorage.app",
  messagingSenderId: "89262865137",
  appId: "1:89262865137:web:245fccc6d28135a6b1c750",
  measurementId: "G-ZVV2MXQTX1",
};

export default function AnalyticsInitializer() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig); // Initialize Firebase app
    if (typeof window !== "undefined" && app) {
      const analytics = getAnalytics(app); // Initialize Firebase Analytics
      // Optionally handle analytics setup here
    }
  }, []);

  return null; // No UI to render
}
