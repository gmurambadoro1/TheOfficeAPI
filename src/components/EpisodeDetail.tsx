import { Episode } from "@/lib/schemas";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { format } from "date-fns";

export default async function EpisodeDetail({ episode }: { episode: Episode }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Episode {episode.episode}
        </Typography>
        <Typography variant="h5" component="div">
          {episode.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Aired on {format(episode.airDate, "MMMM dd, yyyy")}
        </Typography>
        <Typography variant="body2">{episode.summary}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Characters</Button>
      </CardActions>
    </Card>
  );
}
