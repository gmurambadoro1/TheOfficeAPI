import { Box } from "@mui/system";
import { getAllSeasons } from "@/lib/officeHttpClient";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { HomeFilled } from "@mui/icons-material";
import SeasonListItemButton from "@/components/SeasonListItemButton";
import Link from "next/link";

export default async function Sidebar() {
  const seasons = await getAllSeasons();

  return (
    <Box>
      <List>
        <ListItem disableGutters={true}>
          <Link
            href={"/"}
            style={{ textDecoration: "none", color: "inherit" }}
            passHref={true}
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeFilled />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        {seasons.map((season) => {
          return <SeasonListItemButton key={season.id} season={season} />;
        })}
      </List>
    </Box>
  );
}
