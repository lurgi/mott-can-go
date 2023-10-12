import { NextResponse } from "next/server";
const fs = require("fs");

export async function GET(req: Request) {
  return NextResponse.json({ ok: true });
}
