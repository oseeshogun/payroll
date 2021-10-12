import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";
import EmployeesNumber from "../components/dashboard/EmployeesNumber";
import TotalEmployees from "../components/dashboard/TotalEmployees";
import TasksProgress from "../components/dashboard/TasksProgress";
import TotalPay from "../components/dashboard/TotalPay";
import EmployeesPay from "../components/dashboard/EmployeesPay";
import EmployeesByType from "../components/dashboard/EmployeesByType";
import LatestActivities from "../components/dashboard/LatestActivities";
import LatestEmployees from "../components/dashboard/LatestEmployees";

function DashBoard() {
  return (
    <>
      <Helmet>
        <title>Dashboard | Payroll</title>
      </Helmet>
      <Box
        sx={{
          //   backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <EmployeesNumber />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalEmployees />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TasksProgress />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalPay sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <EmployeesPay />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <EmployeesByType sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestActivities sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestEmployees />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default DashBoard;
