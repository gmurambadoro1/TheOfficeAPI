import { Season as SeasonType } from "@/lib/schemas";
import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type SeasonProps = {
  season: SeasonType;
};

const Season: React.FC<SeasonProps> = ({ season }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant={"h5"}>Season {season.number}</Typography>

        <Chip
          label={`${season.startDate.toLocaleDateString()} to ${season.endDate.toLocaleDateString()}`}
          sx={{ mt: 1 }}
        />
      </CardContent>
      <CardActions>
        <Button>View Details</Button>
      </CardActions>
    </Card>
  );
};

export default Season;
