import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Snackbar, Alert } from "@mui/material";
import { Navigate } from "react-router-dom";
import axios from "axios";
const SignIn = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [isMessage, setIsMessage] = useState("");
  const [state, setState] = useState("error");

  const change = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const key = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [key]: value });
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const changeEmail = (e) => {
  //   console.log("email:", e.target.value);
  //   setEmail(e.target.value);
  // };
  // const changePassword = (e) => {
  //   console.log("password:", e.target.value);
  //   setPassword(e.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const res = await axios.post("http://localhost:8003/signin", {
        // id: "7f98956c-db1d-4fb0-9aee-d9a39aa9745f",
        ...user,
      });
      console.log("RES", res);
      setState("success");
      setIsMessage(res.response.data.message);
    } catch (err) {
      console.log("err", err);
      setIsMessage(err.response.data.message);
      handleOpen();
    }

    //   console.log(user);
    //  const res =  await axios.post("http://localhost:8003/signin", {
    //   id:"09bc3da6-fd19-4215-876e-0715d645397c", ...user
    //  } )
  };
  // const login = () => {
  //   console.log("login");
  //   if (email === "" || password === "") {
  //     setOpen(true);
  //   } else {
  //     console.log(email, password);
  //     localStorage.setItem("props.isLogged", true);
  //     return <Navigate replace to="/" />;
  //   }
  // };
  return (
    <Container component="main" maxWidth="xs">
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
        <Box
          // component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={change}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // onChange={changePassword}
            onChange={change}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container align="center">
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                onClick={() => {
                  props.setIsSignIn(false);
                }}
              >
                Don't have an account? Sign In
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        // message="Note archived"
        // action={action}
      >
        <Alert severity={state}>{isMessage}</Alert>
      </Snackbar>
    </Container>
  );
};

export default SignIn;
