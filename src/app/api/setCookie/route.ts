import { NextRequest, NextResponse } from "next/server";
import CryptoJS from "crypto-js";
import { serialize } from "cookie";
import { Key } from "@/lib/secretKey";

export async function POST(req: NextRequest) {
  const {uuid, name} = await req.json();
  const secret_key = Key.secret_key;
  
  const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify({uuid, name}), secret_key).toString();
  
  const cookie = serialize("user", encryptedUser, {
    path: "/",
    maxAge: 60 * 60 * 24,
    httpOnly: true,
  });

  const res = NextResponse.json({ message: "クッキーを設定しました" });
  res.headers.append("Set-Cookie", cookie);
  
  return res;
}