import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import AppIcon from "../../AppIcon/AppIcon";
import { TextField, Button } from "@mui/material";

function Form() {

  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [usernameHelper, setUsernameHelper] = useState<string>("");
  const [passwordHelper, setPasswordHelper] = useState<string>("");

  const onSubmit = () => {
    setUsernameHelper("");
    setPasswordHelper("");
    if (username.trim().length === 0) {
      setUsernameHelper("Mettez le nom d'utilisateur.");
    } else if (password.trim().length <= 8) {
      setPasswordHelper("Mettez le mot de passe");
    }
    if (username === "admin" && password === "ds8&ds9Y2@9"){
      localStorage.setItem("logged", "true");
      localStorage.setItem("username", username);
      window.location.reload();
    }
  }

  return (
    <div className="section">
      <div className="icon-app">
        <AppIcon />
      </div>
      <div className="form-login">
        <TextField
          id="username"
          error={usernameHelper.trim().length !== 0}
          helperText={usernameHelper}
          type="text"
          label="Nom d'utilisateur"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          fullWidth={false}
        />
        <br />
        <br />
        <br />
        <br />
        <TextField
          id="password"
          type="password"
          label="Mot de passe"
          variant="outlined"
          error={passwordHelper.trim().length !== 0}
          helperText={passwordHelper}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{ borderRadius: "20px" }}
        />
        <br />
        <br />
        <br />
        <br />
        <Button variant="contained" onClick={onSubmit}>
          Se connecter
        </Button>
      </div>
    </div>
  );
}

export default Form;
