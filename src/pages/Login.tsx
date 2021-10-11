import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bgImage from "../../assets/images/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://websiteauthor.com">
        Compagny Name
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [usernameHelper, setUsernameHelper] = React.useState<string>("");
  const [passwordHelper, setPasswordHelper] = React.useState<string>("");
  const [alert, setAlert] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const username = data.get("username");
    const password = data.get("password");

    setAlert("");
    setUsernameHelper("");
    setPasswordHelper("");
    if (username == null || username.toString().trim().length === 0) {
      setUsernameHelper("Mettez le nom d'utilisateur.");
    } else if (password == null || password.toString().trim().length <= 8) {
      setPasswordHelper("Mettez le mot de passe");
    }
    if (username === "admin" && password === "ds8&ds9Y2@9") {
      localStorage.setItem("logged", "true");
      localStorage.setItem("username", username);
      window.location.reload();
    } else {
      setAlert("Mot de passe ou nom d'utilisateur incorrect");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Se connecter
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nom d'utilisateur"
                name="username"
                autoComplete="username"
                error={usernameHelper.trim().length !== 0}
                helperText={usernameHelper}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordHelper.trim().length !== 0}
                helperText={passwordHelper}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Se connecter
              </Button>
              <Container>
                {alert.trim().length !== 0 && (
                  <div>
                    <Alert severity="error">{alert}</Alert>
                    <br />
                    <br />
                  </div>
                )}
              </Container>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
