import { NextRequest, NextResponse } from "next/server";
import CryptoJS from "crypto-js";
import { Key } from "@/lib/secretKey";

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("user");
  const secret_key = Key.secret_key;

  if (cookie) {
    try {
      const bytes = CryptoJS.AES.decrypt(cookie.value, secret_key);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      return NextResponse.json({ user: decryptedData });
    } catch (error) {
      return NextResponse.json({ error: "Failed to decrypt cookie" }, { status: 400 });
    }
  } else {
    return NextResponse.json({ user: null });
  }
}