import { getCharacters } from "@/lib/officeHttpClient";

// @ts-ignore
export async function GET() {
  return Response.json(await getCharacters());
}
