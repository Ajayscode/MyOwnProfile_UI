import BottomNavigation from "@mui/material/BottomNavigation";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ContactlessIcon from "@mui/icons-material/Contactless";
import InfoIcon from "@mui/icons-material/Info";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SchoolIcon from "@mui/icons-material/School";
import { redirect } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";

export default function MainNavigation() {
  const [value, setvalue] = useState("home");

  function handleChange(e, newValue) {
    setvalue(newValue);
    redirect(`./${newValue}`);
  }
  return (
    <>
      <BottomNavigation
        sx={{
          width: 900,
          position: "relative",
          background: "none",
          left: "20%",
          zIndex: "5",
        }}
        value={value}
        onChange={handleChange}
      >
        <CustomNavLink label="Home" to="/" icon={<HomeIcon />} value="home" />
        <CustomNavLink
          label="About"
          to="about"
          icon={<InfoIcon />}
          value="about"
        />
        <CustomNavLink
          label="Skills"
          to="skills"
          icon={<HomeRepairServiceIcon />}
          value="skills"
        />
        <CustomNavLink
          label="Education"
          to="edu"
          icon={<SchoolIcon />}
          value="education"
        />
        <CustomNavLink
          label="Contact"
          to="contact"
          icon={<ContactlessIcon />}
          value="contact"
        />
      </BottomNavigation>
    </>
  );
}
