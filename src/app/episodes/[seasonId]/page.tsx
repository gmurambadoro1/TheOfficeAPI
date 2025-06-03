import { Typography } from "@mui/material";
import SeasonEpisodes from "@/components/SeasonEpisodes";

export default async function EpisodePage({
  params,
}: {
  params: { seasonId: number };
}) {
  return (
    <>
      <Typography variant={"h5"}>Season {params.seasonId}</Typography>

      <br />

      <SeasonEpisodes seasonId={params.seasonId} />
    </>
  );
}
