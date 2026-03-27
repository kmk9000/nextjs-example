// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "Hello from the API!" });
// }

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const response = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
  headers: {
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    apikey: `${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
  },
});

const data = await response.json();

export async function GET() {
  return Response.json(data);
}
