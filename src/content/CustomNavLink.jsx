import { NavLink } from "react-router-dom";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Tooltip } from "@mui/material";
// eslint-disable-next-line react/prop-types
function CustomNavLink({ label, to, icon }) {
  const style = {
    color: "aliceblue",
  };
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        color: isActive ? "purple" : "inherit",
        textDecoration: "none",
      })}
    >
      <Tooltip title={label}>
        <BottomNavigationAction
          label={label}
          icon={icon}
          sx={style}
          // eslint-disable-next-line no-unused-vars
        />
      </Tooltip>
    </NavLink>
  );
}

export default CustomNavLink;
