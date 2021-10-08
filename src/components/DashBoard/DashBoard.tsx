import {
  Box,
  Container,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  Money,
  QueryBuilder,
  FilePresent,
  People,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DashBoardNavBar from "./components/NavBar";
import "./DashBoard.css";

function DashBoard() {
  const history = useHistory();

  const [employees, setEmployees] = useState<any>([]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      // When local storage changes, dump the list to
      // the console.
      setEmployees(JSON.parse(localStorage.getItem("employees") || "[]"));
    });
  }, []);

  const MainMenuItem = (active: boolean, Icon: any, title: string) => {
    return (
      <MenuItem>
        <ListItemIcon>
          <Icon style={{ color: active ? "blue" : "black" }} fontSize="small" />
        </ListItemIcon>
        <ListItemText style={{ color: active ? "blue" : "black" }}>
          {title}
        </ListItemText>
      </MenuItem>
    );
  };

  return (
    <div id="dashboard">
      <DashBoardNavBar />
      <Container>
        <Stack direction="row" spacing={2}>
          <Box sx={{ width: 320, maxWidth: "100%" }}>
            <MenuList>
              {MainMenuItem(
                history.location.pathname === "/" ||
                  history.location.pathname === "/dashboard",
                Dashboard,
                "DashBoard"
              )}
              {MainMenuItem(
                history.location.pathname === "/elements",
                Money,
                "Élements de rémunération"
              )}
              {MainMenuItem(
                history.location.pathname === "/absences",
                QueryBuilder,
                "Absences et Temps de travail"
              )}
              {MainMenuItem(
                history.location.pathname === "/documents",
                FilePresent,
                "Documents et Bulletins"
              )}
              {MainMenuItem(
                history.location.pathname === "/equipe",
                People,
                "Équipe"
              )}
            </MenuList>
          </Box>
          <Paper>
            <Container>
              <br />
              <Typography variant="h6">Mon établissement</Typography>
              <p style={{ fontWeight: "bold", color: "grey" }}>
                Employés
                <br />
                <span style={{ fontWeight: "bold", color: "black" }}>{employees[0]}</span>
              </p>
            </Container>
          </Paper>
        </Stack>
      </Container>
    </div>
  );
}

export default DashBoard;
