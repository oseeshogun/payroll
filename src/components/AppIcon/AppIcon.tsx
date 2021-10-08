import React from "react";
import icon from "../../assets/images/icons8-signet.png";

function AppIcon() {
  return (
    <div style={{ display: "flex" }}>
      <h2>
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
