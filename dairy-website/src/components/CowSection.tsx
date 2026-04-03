import { Container, Typography, Grid, Box, Button } from "@mui/material";
import React from "react";
import LableComponent from "../common/LableComponent";
import CardComponent from "../common/CardComponent";

import Jersey from "../assets/Jersey.png";
import Ayrshire from "../assets/Ayrshire.png";
import Holstein from "../assets/Holstein.png";
import Brown_Swiss from "../assets/Brown_Swiss.png";

const cards = [
  { id: 1, name: "Jersey", image: Jersey },
  { id: 2, name: "Ayrshire", image: Ayrshire },
  { id: 3, name: "Holstein", image: Holstein },
  { id: 4, name: "Brown Swiss", image: Brown_Swiss },
];

const CowSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#eae3d6",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LableComponent primaryTypo={"Meet Our Cows"}>
        <Typography>
          Happy, Healthy and grass-fed. Get to know our beloved cows
        </Typography>
      </LableComponent>
      <Container maxWidth="md">
        <Grid container maxWidth="md" spacing={2}>
          {cards.map((card) => (
            <CardComponent key={card.id} name={card.name} image={card.image}>
              <Typography textAlign="center" color="textPrimary">
                {card.name}
              </Typography>
            </CardComponent>
          ))}
        </Grid>
      </Container>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}
      >
        <Button variant="contained" color="primary">
          View The Herd
        </Button>
      </Grid>
    </Box>
  );
};

export default CowSection;
