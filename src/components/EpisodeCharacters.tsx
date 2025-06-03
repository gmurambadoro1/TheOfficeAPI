"use client";
import { Episode } from "@/lib/schemas";
import { useCharacters } from "@/hooks/useCharacters";
import { Paper, Stack, Typography } from "@mui/material";

export default function EpisodeCharacters({ episode }: { episode: Episode }) {
  const { loading, characters } = useCharacters(episode.id);

  return (
    <div>
      <Typography variant="body2" mt={2} mb={2}>
        {episode.summary}
      </Typography>

      {loading && <p>Loading characters...</p>}

      <div>
        {characters.map((item) => {
          return (
            <Paper key={item.id} sx={{ padding: 2, marginBottom: 2 }}>
              <Stack>
                <Typography component={"p"}>{item.actor || ""}</Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  as {item.name}
                </Typography>
              </Stack>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}
