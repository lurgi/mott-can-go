import { NextResponse } from "next/server";
import client from "../../../lib/client";

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  return NextResponse.json({ ok: true });
}
