import { NavLink } from "react-router-dom";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Tooltip } from "@mui/material";
// eslint-disable-next-line react/prop-types
function CustomNavLink({ label, to, icon, active = false }) {
  const style = {
    color: active ? "grey" : "aliceblue",
  };
  return (
    <NavLink to={to}>
      <Tooltip title={label}>
        <BottomNavigationAction label={label} icon={icon} sx={style} />
      </Tooltip>
    </NavLink>
  );
}

export default CustomNavLink;
