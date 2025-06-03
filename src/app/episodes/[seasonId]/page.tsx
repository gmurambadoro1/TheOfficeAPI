import { Paper, Typography } from "@mui/material";
import SeasonEpisodes from "@/components/SeasonEpisodes";
import { Suspense } from "react";

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ seasonId: number }>;
}) {
  const { seasonId } = await params;

  return (
    <>
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant={"h5"}>The Office: Season {seasonId}</Typography>
      </Paper>

      <Typography mt={2} mb={2}>
        Explore the episodes of Season {seasonId} of The Office. Click on any
        episode to view its details, including air date, characters and summary.
      </Typography>

      <Suspense fallback={<p>Loading episodes...</p>}>
        <SeasonEpisodes seasonId={seasonId} />
      </Suspense>
    </>
  );
}
