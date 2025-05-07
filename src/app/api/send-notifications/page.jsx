// src/app/api/send-notification/route.js
import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/firebase/sendNotification";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, body: messageBody, recipients } = body;

    if (!title || !messageBody || !recipients) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendNotification(title, messageBody, recipients);

    return NextResponse.json(
      { success: true, message: "Notification sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending notification:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
