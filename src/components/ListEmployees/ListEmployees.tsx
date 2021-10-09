import React from "react";
import DashBoardNavBar from "../DashBoard/components/NavBar";
import "../DashBoard/DashBoard.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/material";

function ListEmployees() {
  const [employees, setEmployees] = React.useState<[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Nom",
      width: 150,
      editable: true,
    },
    {
      field: "prename",
      headerName: "Prénom",
      width: 150,
      editable: true,
    },
    {
      field: "postnom",
      headerName: "Postnom",
      width: 150,
      editable: true,
    },
    {
      field: "birthday",
      headerName: "Date de naissance",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "poste",
      headerName: "Poste",
      description: "Le poste occupé par l'employée.",
      sortable: false,
      width: 120,
    },
    {
      field: "classification",
      headerName: "Classification",
      sortable: false,
      width: 120,
    },
  ];

  React.useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees") || "[]"));
    window.addEventListener("storage", () => {
      // When local storage changes, dump the list to
      // the console.
      setEmployees(JSON.parse(localStorage.getItem("employees") || "[]"));
    });
  }, []);

  const rows: any[] = employees.map((obj: Object, index) => {
    return { id: index, ...obj };
  });

  return (
    <div id="dashboard">
      <DashBoardNavBar
        onUpdate={() => {
          setEmployees(JSON.parse(localStorage.getItem("employees") || "[]"));
        }}
      />
      <Container>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </Container>
    </div>
  );
}

export default ListEmployees;
