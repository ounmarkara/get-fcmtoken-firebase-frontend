// src/app/page.js
"use client";

export default function Home() {
  const handleSendNotification = async () => {
    try {
      const response = await fetch("/api/send-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Test Title",
          body: "Test Body",
          recipients: [{ endpoint: "fcm-token" }],
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <div>
      <h1>Test Push Notification</h1>
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
}
