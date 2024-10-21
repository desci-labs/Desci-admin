import { NODES_API_URL } from "@/lib/config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  try {
    const response = await fetch(
      `${NODES_API_URL}/v1/admin/analytics/csv`,
      {
        credentials: "include",
        headers: {
          cookie: cookies().toString(),
          "Content-Type": "application/json",
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWRyYWNoQGRlc2NpLmNvbSIsImlhdCI6MTcyODM5NjAyMCwiZXhwIjoxNzU5OTUzNjIwfQ.Qck4KQEmraFRaqjtb-fNCUR9aM_tVMWLeQbGwjgs-2k'
        },
      }
    );
    return response
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
