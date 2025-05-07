import { getToken } from "firebase/messaging";
import { messaging } from "../../public/firebase-config";

export const requestNotificationPermission = async (userId) => {
  try {
    if (!messaging) {
      console.error("Firebase Messaging is not initialized.");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.log("Notification permission denied.");
      return;
    }

    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );

    if (!registration) {
      console.error("Service worker registration failed.");
      return;
    }

    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    if (!token) {
      console.error("Failed to retrieve FCM token.");
      return;
    }

    // Optionally, send the token to your server to store it for the user
    await fetch("/api/save-fcm-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, token }),
    });

    console.log("FCM token saved successfully:", token);
  } catch (error) {
    console.error("Error requesting notification permission:", error);
  }
};
