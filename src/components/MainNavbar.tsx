import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import AppIcon from "./AppIcon";

const MainNavbar = (props:any) => (
  <AppBar elevation={0} {...props}>
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <AppIcon />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
