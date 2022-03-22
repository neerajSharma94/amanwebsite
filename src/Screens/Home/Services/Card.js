import React from "react";
import "../style.scss";
import { Typography } from "@mui/material";

const CardComponent = ({ heading, desc, img }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={img} alt="" className="card-img" />
      </div>
      <Typography className="card-heading">{heading}</Typography>
      <Typography className="card-desc">{desc}</Typography>
    </div>
  );
};

export default CardComponent;
