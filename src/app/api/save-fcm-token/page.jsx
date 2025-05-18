// // app/api/save-fcm-token/route.js
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { userId, token } = await req.json();

//     if (!userId || !token) {
//       return NextResponse.json(
//         { success: false, message: "Missing userId or token" },
//         { status: 400 }
//       );
//     }

//     // Save the token to your database (

//     console.log(`FCM token saved for user ${userId}: ${token}`);

//     return NextResponse.json(
//       { success: true, message: "Token saved successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error saving FCM token:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to save token" },
//       { status: 500 }
//     );
//   }
// }
