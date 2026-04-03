import { Box, Button, CssBaseline, Typography } from "@mui/material";
import React from "react";
import heroImg from "../assets/cow_hero.png";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          height: "80vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h3" fontSize="bold">
            From Our Pastures to Your Table
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Pure, local and delicious. Discover the teste of fresh-from-farm
            dairy
          </Typography>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button variant="contained">Our Story</Button>
            <Button variant="outlined" color="inherit" sx={{ mt: 2 }}>
              Shop Milk & Cheese
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
