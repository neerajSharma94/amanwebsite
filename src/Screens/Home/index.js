import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../../Components/AppBar";
import Footer from "./Footer";
import Services from "./Services";
import StoryComponent from "./StoryComponent";
import "./style.scss";
const img =
  "https://www.globalmatrixsurvey.com/theme/default/assets/img/hero-img.png";

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Container sx={{ "&.MuiContainer-root": { maxWidth: "90vw" } }}>
        <Box display="flex" justifyContent="center" height="70vh">
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            // justifyContent="center"
          >
            <Box display="flex" flexDirection="column">
              <Typography className="heading">
                YOUR GLOBAL ONLINE DATA COLLECTION PARTNER!
              </Typography>
              <Typography variant="h7" sx={{ color: "#1c698c" }}>
                Online Surveys cover 30+ markets globally, samples from
                industries including healthcare, consumers, automobile, finance,
                education.
              </Typography>
              <div>
                <Button
                  variant="contained"
                  sx={{ textTransform: "none", mt: 1 }}
                >
                  Let's talk
                </Button>
              </div>
            </Box>
          </Box>
          <Box
            flex={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <img src={img} alt="" width={600} />
          </Box>
        </Box>
        <Services />
        <StoryComponent />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
