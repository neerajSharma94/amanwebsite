import { Box, Typography } from "@mui/material";
import React from "react";
import "../style.scss";
import CardComponent from "./Card";
import pic1 from "../../../data/images/pic1.jpg";
import pic2 from "../../../data/images/pic2.jpg";
import pic3 from "../../../data/images/pic3.jpg";
import pic4 from "../../../data/images/pic4.jpg";
import pic5 from "../../../data/images/pic5.jpg";
import img from "../../../data/images/home.jpg";

const servicesData = [
  {
    label: "Quantitative Research",
    desc: "Quantitative research is defined as a systematic investigation by gathering quantifiable data and performing statistical or computational techniques.",
    img: pic4,
  },
  {
    label: "Qualitative Research",
    desc: "Qualitative research is defined as a market research method that focuses on obtaining data through open-ended and conversational communication.",
    img: pic2,
  },
  {
    label: "Online Research",
    desc: "Online research methods are ways in which researchers can collect data via internet. It is also referred to as Internet research,Internet science or Web-based methods.",
    img: pic3,
  },
  {
    label: "Telephone Surveys",
    desc: "A telephone survey, also known as CATI is a research method where the researcher surveys respondents over the telephone.",
    img: pic1,
  },
  {
    label: "Business Research",
    desc: "Business research is a acquiring detailed information of business and using such information in maximizing the profit.",
    img: pic5,
  },
  {
    label: "Other Services",
    desc: "Our expertise is based on utilizing different programming tools used for market research. Reach out to us quickly.",
    img,
  },
];

const Services = () => {
  return (
    <div>
      <Typography
        className="heading-sub"
        component="div"
        sx={{ textAlign: "center" }}
      >
        SERVICES
      </Typography>
      <Typography variant="body1" sx={{ color: "#0f394c" }}>
        We can deliver our fieldworks in over 30+ countries globally, and our
        samples can cover various industries such as Consumer Electronics,
        Automobile, Finance, Healthcare, Education, B2B, B2C and much more.
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={6}
        flexWrap="wrap"
        my={2}
      >
        {servicesData.map((item) => (
          <CardComponent heading={item.label} desc={item.desc} img={item.img} />
        ))}
      </Box>
    </div>
  );
};

export default Services;
