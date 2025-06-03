import { Episode } from "@/lib/schemas";

export default async function EpisodeCharacters({
  episode,
}: {
  episode: Episode;
}) {
  const characters = [];

  // todo: find characters in the episode

  return (
    <>
      <p>Characters for Episode {episode.episode}</p>
    </>
  );
}
