"use client";

import { Season } from "@/lib/schemas";
import { PlayCircle } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function SeasonListItemButton({ season }: { season: Season }) {
  const router = useRouter();

  return (
    <ListItem key={season.id} disableGutters={true}>
      <ListItemButton onClick={() => router.push(`/episodes/${season.id}`)}>
        <ListItemIcon>
          <PlayCircle />
        </ListItemIcon>
        <ListItemText>Season {season.id}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
