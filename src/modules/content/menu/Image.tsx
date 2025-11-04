import React from "react";
import Zoom from "@mui/material/Zoom";

import { theme } from "../../../lib/theme/theme";
import profile from "../../../assets/images/profile.jpg";
import "./styles.css";

export default function Image() {
  const style = {
    width: "210px",
    height: "210px",
    borderRadius: "50%",
    boxShadow: `0px 0px 40px ${theme.palette.primary.light}`,
    border: `${theme.palette.primary.light} 4px solid`,
  };

  return (
    <div className="image-wrapper">
      <Zoom in timeout={500}>
        <img
          src={profile}
          alt="profile picture"
          className="image"
          style={style}
        />
      </Zoom>
    </div>
  );
}

Image;
