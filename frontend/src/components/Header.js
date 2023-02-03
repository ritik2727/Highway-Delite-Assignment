import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Linkmui from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Lukjury Shop
          </Typography>
          <nav>
            <Linkmui
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Linkmui>
            <Linkmui
              variant="button"
              color="text.primary"
             
              sx={{ my: 1, mx: 1.5 }}
            >
              <Link to='/cart'>Cart</Link>
            </Linkmui>
            <Linkmui
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              <Link to='/orders'>Orders</Link>
            </Linkmui>
          </nav>
          <Button  variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          <Link to='/login'>Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
