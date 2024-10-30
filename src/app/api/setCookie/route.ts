import { NextRequest, NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const secretKey = 'mySecretKey';
  
  const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(body), secretKey).toString();
  
  const cookie = serialize('user', encryptedUser, {
    path: '/',
    maxAge: 60 * 60 * 24,
    httpOnly: true,
  });

  const res = NextResponse.json({ message: 'クッキーを設定しました' });
  res.headers.append('Set-Cookie', cookie);
  
  return res;
}