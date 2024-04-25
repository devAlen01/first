import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Avatar, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            backgroundColor: "black",
            padding: "20px",
            borderRadius: "10px",
          }}
          position="sticky"
        >
          <Box
            sx={{
              width: "800px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <IconButton>
              <Stack direction="row" spacing={5}>
                <Avatar
                  sx={{ width: 88, height: 88 }}
                  alt="Remy Sharp"
                  src="https://static.orgpage.ru/companies/e3/e3cd701d9eb84d8b9bf5f2e1bc25e246.jpg"
                />
              </Stack>
            </IconButton>
            <Toolbar>
              <Box
                sx={{
                  width: "600px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" color="inherit" component="div">
                  <NavLink to="/">HOME</NavLink>
                </Typography>

                <Typography variant="h6" color="inherit" component="div">
                  <NavLink to="/modal">ADD NEW STUDENT</NavLink>
                </Typography>
                <Typography variant="h6" color="inherit" component="div">
                  <NavLink to="/students">STUDENTS</NavLink>
                </Typography>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
      </Box>
    </div>
  );
}
