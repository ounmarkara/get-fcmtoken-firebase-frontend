// app/layout.js

import NotificationPermission from "@/Components/NotificationPermission";

export default function RootLayout({ children }) {
  // // Replace with actual user ID from your auth system (e.g., Firebase Auth)
  const userId = "example-user-id";

  return (
    <html lang="en">
      <body>
        <NotificationPermission userId={userId} />
        {children}
      </body>
    </html>
  );
}
