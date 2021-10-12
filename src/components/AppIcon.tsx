import React from "react";
import icon from "../assets/images/icons8-bookmark-30.png";

function AppIcon() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h2 style={{ color: 'white'}}>
        {" "}
        <img
          src={icon}
          alt="Logo"
          style={{
            width: "30px",
            height: "30px",
            float: "left",
            marginRight: "10px",
          }}
        />{" "}
        Payroll
      </h2>
    </div>
  );
}

export default AppIcon;
