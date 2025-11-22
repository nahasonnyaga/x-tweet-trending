import { NextResponse } from "next/server";

export async function GET() {
  const mockTrends = [
    { tag: "KenyaDecides", count: 42100 },
    { tag: "Nairobi", count: 19000 },
    { tag: "Safaricom", count: 8700 },
    { tag: "Kplc", count: 6500 },
  ];

  return NextResponse.json(mockTrends);
}
