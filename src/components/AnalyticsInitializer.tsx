import { firebaseConfig } from "@ /";

import { useEffect } from "react";

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// Assuming you have the config

export default function AnalyticsInitializer() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig); // Initialize Firebase app
    if (typeof window !== "undefined" && app) {
      getAnalytics(app); // Initialize Firebase Analytics without assigning to a variable
    }
  }, []);

  return null; // No UI to render
}
