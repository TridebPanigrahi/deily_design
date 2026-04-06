import { Container, Typography, Grid, Box, Button } from "@mui/material";
import LableComponent from "../common/LableComponent";
import CardComponent from "../common/CardComponent";
import Jersey from "../assets/Jersey.png";
import Ayrshire from "../assets/Ayrshire.png";
import Holstein from "../assets/Holstein.png";
import Brown_Swiss from "../assets/Brown_Swiss.png";
import { useNavigate } from "react-router-dom";

const cards = [
  { id: 1, color: "red", name: "Jersey", image: Jersey },
  { id: 2, color: "white", name: "Ayrshire", image: Ayrshire },
  { id: 3, color: "green", name: "Holstein", image: Holstein },
  { id: 4, color: "brown", name: "Brown Swiss", image: Brown_Swiss },
];

const CowSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#eae3d6",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 1,
      }}
    >
      <LableComponent primaryTypo={"Meet Our Cows"}>
        <Typography>
          Happy, Healthy and grass-fed. Get to know our beloved cows
        </Typography>
      </LableComponent>
      <Grid container maxWidth="md" spacing={10} margin="auto">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            name={card.name}
            image={card.image}
            action={false}
          >
            <Typography textAlign="center" color="textPrimary">
              {card.name}
            </Typography>
          </CardComponent>
        ))}
      </Grid>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/cow-filter")}
        >
          View The Herd
        </Button>
      </Grid>
    </Box>
  );
};

export default CowSection;
