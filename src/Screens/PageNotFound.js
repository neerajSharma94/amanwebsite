import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home/style.scss";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/");
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <div>
        <div>we Are working on this page.</div>
        <div className="section-center" style={{ marginTop: "20px" }}>
          <a href="/" className=" btn-text" onClick={handleRoute}>
            Home &rarr;
          </a>
        </div>
      </div>
    </Box>
  );
};

export default PageNotFound;
