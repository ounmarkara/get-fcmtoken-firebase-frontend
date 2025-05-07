// components/NotificationPermission.js
"use client";

import { useEffect } from "react";
import { requestNotificationPermission } from "../../lib/firebase/requestNotificationPermission";

const NotificationPermission = ({ userId }) => {
  useEffect(() => {
    if (!userId) {
      console.warn("User ID is not provided.");
      return;
    }

    const subscribeUser = async () => {
      await requestNotificationPermission(userId);
    };

    subscribeUser();
  }, [userId]);

  return null;
};

export default NotificationPermission;
