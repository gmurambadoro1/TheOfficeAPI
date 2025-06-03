import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Heading() {
  return (
    <AppBar position="static" sx={{ mb: 2, mt: 2 }}>
      <Toolbar>
        <Typography variant={"h5"} color={"inherit"} component={"div"}>
          The Office - A Mockumentary Series
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
