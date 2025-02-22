// app/test/route.js
import { NextResponse } from "next/server";

export const GET = async () => {
  return new NextResponse("Hello from test route", {
    status: 200,
  });
};
