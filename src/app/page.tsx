import { Typography } from "@mui/material";
import { Suspense } from "react";
import SeasonsMenuList from "@/components/SeasonsMenuList";

export default async function Home() {
  return (
    <>
      <Typography variant={"h5"} gutterBottom={true}>
        The Office Home Page
      </Typography>

      <Typography>
        Welcome to The Office episode guide! Browse all seasons below and click
        on any season to explore its episodes, air dates, and summaries. Dive
        into the world of Dunder Mifflin and relive your favorite moments from
        every season.
      </Typography>

      <br />

      <Suspense fallback={<p>Loading...</p>}>
        <SeasonsMenuList />
      </Suspense>
    </>
  );
}
