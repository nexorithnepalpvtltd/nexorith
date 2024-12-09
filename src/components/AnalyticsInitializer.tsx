import { useEffect } from "react";

import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./firebaseConfig";

// Assuming you have the config

export default function AnalyticsInitializer() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig); // Initialize Firebase app
    if (typeof window !== "undefined" && app) {
      const analytics = getAnalytics(app); // Initialize Firebase Analytics
      // Example of logging an event
      logEvent(analytics, "page_view");
    }
  }, []);

  return null; // No UI to render
}
