"use client";
import { Episode } from "@/lib/schemas";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Drawer,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { useState } from "react";
import { Box } from "@mui/system";
import EpisodeCharacters from "@/components/EpisodeCharacters";

export default function EpisodeDetail({ episode }: { episode: Episode }) {
  const [open, setOpen] = useState<boolean>(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  if (!episode) {
    return null;
  }

  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
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
          <Button size="small" onClick={openDrawer}>
            Characters
          </Button>
        </CardActions>
      </Card>

      <Drawer open={open} onClose={closeDrawer} anchor={"right"}>
        <Box width={400} p={2}>
          <Typography variant={"h5"}>
            The Office Episode {episode.episode} Characters
          </Typography>

          <EpisodeCharacters episode={episode} />
        </Box>
      </Drawer>
    </>
  );
}
