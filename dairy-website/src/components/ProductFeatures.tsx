import React from "react";

import milk from "../assets/milk.png";
import cheeses from "../assets/cheeses.png";
import yogurt from "../assets/yogurt.png";
import butter from "../assets/butter.png";
import {
  Button,
  CardActions,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import LableComponent from "../common/LableComponent";
import CardComponent from "../common/CardComponent";

const productCards = [
  {
    id: 1,
    name: "Milk",
    image: milk,
    desc: "Rice, creamy and packed with flavor",
  },
  {
    id: 2,
    name: "Cheeses",
    image: cheeses,
    desc: "Created by hand using traditional recipes",
  },
  {
    id: 3,
    name: "Yogurt",
    image: yogurt,
    desc: "Naturally probiotic, no added sugar",
  },
  {
    id: 4,
    name: "Butter",
    image: butter,
    desc: "Slow-crurned for unbeatable taste",
  },
];

const ProductFeatures = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LableComponent primaryTypo="Our Featured Products">
          <Typography variant="body1">
            Learn how we make our fresh dairy products, from cow to a bottle
          </Typography>
        </LableComponent>
      </Grid>
      <Grid container maxWidth="md" margin="auto" spacing={10}>
        {productCards.map((card) => (
          <>
            <CardComponent
              key={card.id}
              image={card.image}
              name={card.name}
              action={
                <Button variant="contained" size="small">
                  Learn More
                </Button>
              }
            >
              <Typography variant="h5">{card.name}</Typography>
              <Typography variant="caption">{card.desc}</Typography>
            </CardComponent>
          </>
        ))}
      </Grid>
    </>
  );
};

export default ProductFeatures;
