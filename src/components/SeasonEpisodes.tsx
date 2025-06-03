import { getSeasonEpisodes } from "@/lib/officeHttpClient";
import EpisodeDetail from "@/components/EpisodeDetail";

export default async function SeasonEpisodes({
  seasonId,
}: {
  seasonId: number;
}) {
  const episodes = await getSeasonEpisodes(seasonId);

  return (
    <>
      {episodes.map((episode) => (
        <EpisodeDetail key={episode.id} episode={episode} />
      ))}
    </>
  );
}
