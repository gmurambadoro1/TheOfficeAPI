"use client";
import { Season as SeasonType } from "@/lib/schemas";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Drawer,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SeasonEpisodes from "@/components/SeasonEpisodes";

type SeasonProps = {
  season: SeasonType;
};

const Season: React.FC<SeasonProps> = ({ season }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant={"h5"}>Season {season.number}</Typography>

          <Chip
            label={`${season.startDate.toLocaleDateString()} to ${season.endDate.toLocaleDateString()}`}
            sx={{ mt: 1 }}
          />
        </CardContent>
        <CardActions>
          <Button onClick={() => setOpen(true)}>Episodes</Button>
        </CardActions>
      </Card>

      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        <Box width={400} padding={2}>
          <SeasonEpisodes seasonId={season.id} />
        </Box>
      </Drawer>
    </>
  );
};

export default Season;
