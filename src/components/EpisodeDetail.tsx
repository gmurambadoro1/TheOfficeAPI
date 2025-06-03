import { Episode } from "@/lib/schemas";
import { Typography } from "@mui/material";

export default async function EpisodeDetail({ episode }: { episode: Episode }) {
  return <Typography variant={"h4"}>{episode.title}</Typography>;
}
