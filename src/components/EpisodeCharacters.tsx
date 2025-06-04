"use client";
import { Character, Episode } from "@/lib/schemas";
import { Paper, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const QUERY_KEY = "characters";

const instance = axios.create();

export default function EpisodeCharacters({ episode }: { episode: Episode }) {
  const { isLoading, data: characters } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const { data } = await instance.get("/api/characters");

      return data as Character[];
    },
    enabled: Number(episode?.id ?? 0) > 0,
  });

  const episodeFilter = (character: Character) => {
    return character.episodes.some(
      (item) => item.episode.id === Number(episode.id)
    );
  };

  return (
    <div>
      <Typography variant="body2" mt={1} mb={2}>
        {episode.summary}
      </Typography>

      {isLoading && <p>Loading characters...</p>}

      <div>
        {!isLoading &&
          Array.from(characters ?? [])
            .filter(episodeFilter)
            .map((item, index) => {
              return (
                <Paper key={item.id} sx={{ padding: 2, marginBottom: 2 }}>
                  <Stack>
                    <Typography component={"p"}>
                      {index + 1}. {item.actor || ""} #{item.id}
                    </Typography>
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
