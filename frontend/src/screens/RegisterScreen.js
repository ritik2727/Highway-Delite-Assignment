import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Linkmui from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormHelperText } from "@mui/material";
import { Link } from "react-router-dom";

export default function RegisterScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        position: "relative",
        // margin:100,
        backgroundColor: "white",
        boxShadow: ` 0px 0px 4px rgba(0, 0, 0, 0.1)`,
        borderRadius: 12,
        // padding:10,
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormHelperText
                style={{ zIndex: 10, color: " #545454" }}
                id="name"
              >
                Name
              </FormHelperText>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                placeholder="Enter Name"
                fullWidth
                id="name"
                style={{ zIndex: 10, marginTop: 5,}}
                size='small'
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
            <FormHelperText
              style={{ zIndex: 10, color: " #545454" }}
              id="email"
            >
              Email
            </FormHelperText>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="Enter Email Address"
                name="email"
                size="small"
                style={{ zIndex: 10, marginTop: 5,  }}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormHelperText
                style={{ zIndex: 10, color: " #545454" }}
                id="name"
              >
                Password
              </FormHelperText>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="Enter Password"
                type="password"
                size='small'
                style={{ zIndex: 10, marginTop: 5, marginBottom: "1rem" }}
                id="password"
                autoComplete="new-password"
              />
            </Grid>
         
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Linkmui href="#" variant="body2">
                <Link to='/login'>Already have an account? Sign in</Link>
              </Linkmui>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
