import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Linkmui from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormHelperText } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAlert } from "react-alert";

export default function LoginScreen() {
  const navigate = useNavigate();
  const alert = useAlert();
  const location = useLocation();
  const dispatch = useDispatch();

  let errorStatus = false;

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  React.useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect, error]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    // validate(data);
    if (!errorStatus) {
      dispatch(login(data.get("email"), data.get("password")));
    }
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormHelperText
                style={{ zIndex: 10, color: " #545454" }}
                id="email"
              >
                Email
              </FormHelperText>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                // label="Email Address"
                name="email"
                style={{ zIndex: 10, marginTop: 5, marginBottom: "1rem" }}
                size="small"
                autoComplete="email"
                placeholder="Enter Email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <FormHelperText
                style={{ zIndex: 10, color: " #545454" }}
                id="password"
              >
                Password
              </FormHelperText>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                style={{ zIndex: 10, marginTop: 5, marginBottom: "1rem" }}
                placeholder="Enter Password"
                type="password"
                id="password"
                size="small"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Linkmui href="#" variant="body2">
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Linkmui>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
