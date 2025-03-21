import { NextRequest, NextResponse } from "next/server";
import CryptoJS from "crypto-js";

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("user");

  if (cookie) {
    try {
      const bytes = CryptoJS.AES.decrypt(cookie.value, "crypto");
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      return NextResponse.json({ user: decryptedData });
    } catch {
      return NextResponse.json({ error: "Failed to decrypt cookie" }, { status: 400 });
    }
  } else {
    return NextResponse.json({ user: null });
  }
}