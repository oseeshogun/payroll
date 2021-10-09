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
import moment from "moment";
import { Bar } from "react-chartjs-2";

function DashBoard() {
  const history = useHistory();

  moment.locale("fr");

  const [employees, setEmployees] = useState<any>([]);
  const endOfMonth = moment().endOf("month").format("MMM DD, YYYY");

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees") || "[]"));
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

  const payments = [2000, 2350, 2100, 2210, 1900, 2040];

  const data = {
    labels: ["Janv", "Fev", "Mars", "Avril", "Mai", "Juin"],
    datasets: [
      {
        label: "Montants payés",
        data: payments,
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: undefined,
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        // position: "bottom",
      },
      title: {
        display: true,
        text: "Evolution des payes",
      },
    },
  };

  const sum = payments.reduce((a, b) => a + b, 0);
  const avg = sum / payments.length || 0;

  const dataEmployees = {
    labels: ["Janv", "Fev", "Mars", "Avril", "Mai", "Juin"],
    datasets: [
      {
        label: '# nombres d\'employées',
        data: [12, 19, 22, 20, 21, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const optionsEmployees = {
    indexAxis: undefined,
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        // position: "bottom",
      },
      title: {
        display: true,
        text: "Evolution des employées",
      },
    },
  };

  return (
    <div id="dashboard">
      <DashBoardNavBar
        onUpdate={() => {
          setEmployees(JSON.parse(localStorage.getItem("employees") || "[]"));
        }}
      />
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
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {employees.length}
                </span>
              </p>
              <p>Prochain jour de paie {endOfMonth}</p>
            </Container>
          </Paper>
          <Paper>
            <Container>
              <br />
              <Typography variant="h6">Statistiques principales</Typography>
              <p style={{ fontWeight: "bold", color: "grey" }}>
                Moyenne de paiment de l'année
                <br />
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {avg}
                </span>
              </p>
              <p style={{ fontWeight: "bold", color: "grey" }}>
                Moyenne des employées par mois
                <br />
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {18}
                </span>
              </p>
            </Container>
          </Paper>
        </Stack>
      </Container>
      <br />
      <br />
      <br />
      <Container>
        <Stack direction="row" spacing={2}>
          <Box sx={{ width: 320, maxWidth: "100%" }}></Box>
          
          <Paper style={{ width: "80%" }}>
            <Container>
              <Bar data={data} options={options} />
            </Container>
          </Paper>
        </Stack>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Stack direction="row" spacing={2}>
          <Box sx={{ width: 320, maxWidth: "100%" }}></Box>
          <Paper style={{ width: "80%" }}>
            <Container>
              <Bar data={dataEmployees} options={optionsEmployees} />
            </Container>
          </Paper>
        </Stack>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
}

export default DashBoard;
