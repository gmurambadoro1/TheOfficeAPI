import { getAllSeasons } from "@/lib/officeHttpClient";
import Season from "@/components/Season";
import { Box } from "@mui/system";

export default async function Home() {
  const seasons = await getAllSeasons();

  console.log({ seasons });

  return (
    <>
      {seasons.map((season) => (
        <Box key={season.id} sx={{ mb: 2 }}>
          <Season season={season} />
        </Box>
      ))}
    </>
  );
}
