import BottomNavigation from "@mui/material/BottomNavigation";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ContactlessIcon from "@mui/icons-material/Contactless";
import InfoIcon from "@mui/icons-material/Info";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SchoolIcon from "@mui/icons-material/School";
import CustomNavLink from "./CustomNavLink";

export default function MainNavigation() {
  const navbar = [
    { value: "home", icon: <HomeIcon /> },
    { value: "about", icon: <InfoIcon /> },
    { value: "skills", icon: <HomeRepairServiceIcon /> },
    { value: "education", icon: <SchoolIcon /> },
    { value: "contact", icon: <ContactlessIcon /> },
  ];

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
      >
        {navbar.map((ele, index) => {
          return (
            <CustomNavLink
              label={ele.value}
              to={ele.value === "home" ? "/" : ele.value}
              icon={ele.icon}
              value={ele.value}
              active={false}
              key={index}
            />
          );
        })}
      </BottomNavigation>
    </>
  );
}
