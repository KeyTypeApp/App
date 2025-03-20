import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const cookie = serialize("user", "", {
    path: "/",
    maxAge: 0,
  });

  const res = NextResponse.json({ message: "クッキーを削除しました。" });
  res.headers.append("Set-Cookie", cookie);

  return res;
}