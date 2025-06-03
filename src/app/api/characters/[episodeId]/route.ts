import { getCharacters } from "@/lib/officeHttpClient";
import { Character } from "@/lib/schemas";
import { NextRequest } from "next/server";

// @ts-ignore
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ episodeId: number }> }
) {
  const characters = await getCharacters();

  const episodeId = await params;

  const episodeFilter = (character: Character) => {
    return character.episodes.some(
      (character) => character.episode.id === Number(episodeId.episodeId)
    );
  };

  return Response.json(characters.filter(episodeFilter));
}
