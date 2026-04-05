import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import Jersey from "../assets/Jersey.png";
import Ayrshire from "../assets/Ayrshire.png";
import Holstein from "../assets/Holstein.png";
import Brown_Swiss from "../assets/Brown_Swiss.png";
import { useMemo, useState } from "react";
import CardComponent from "../common/CardComponent";

const cards = [
  { id: 1, color: "red", name: "Jersey", image: Jersey, type: "bulls" },
  { id: 2, color: "red", name: "Jersey", image: Jersey, type: "cattles" },
  { id: 3, color: "white", name: "Ayrshire", image: Ayrshire, type: "bulls" },
  { id: 4, color: "white", name: "Ayrshire", image: Ayrshire, type: "cattles" },
  { id: 5, color: "white", name: "Ayrshire", image: Ayrshire, type: "cows" },
  { id: 6, color: "white", name: "Ayrshire", image: Ayrshire, type: "bulls" },
  { id: 7, color: "white", name: "Ayrshire", image: Ayrshire, type: "cattles" },
  { id: 8, color: "white", name: "Ayrshire", image: Ayrshire, type: "cows" },
  { id: 9, color: "red", name: "Jersey", image: Jersey, type: "cows" },
  { id: 10, color: "red", name: "Jersey", image: Jersey, type: "bulls" },
  {
    id: 11,
    color: "green",
    name: "Holstein",
    image: Holstein,
    type: "cattles",
  },
  { id: 12, color: "green", name: "Holstein", image: Holstein, type: "cows" },
  { id: 13, color: "green", name: "Holstein", image: Holstein, type: "bulls" },
  {
    id: 14,
    color: "green",
    name: "Holstein",
    image: Holstein,
    type: "cattles",
  },
  { id: 15, color: "green", name: "Holstein", image: Holstein, type: "cows" },
  { id: 16, color: "green", name: "Holstein", image: Holstein, type: "bulls" },
  { id: 17, color: "red", name: "Jersey", image: Jersey, type: "cattles" },
  { id: 18, color: "red", name: "Jersey", image: Jersey, type: "cows" },
  { id: 19, color: "red", name: "Jersey", image: Jersey, type: "bulls" },
  { id: 20, color: "red", name: "Jersey", image: Jersey, type: "cattles" },
  {
    id: 21,
    color: "brown",
    name: "Brown Swiss",
    image: Brown_Swiss,
    type: "cows",
  },
  {
    id: 22,
    color: "brown",
    name: "Brown Swiss",
    image: Brown_Swiss,
    type: "bulls",
  },
  {
    id: 23,
    color: "brown",
    name: "Brown Swiss",
    image: Brown_Swiss,
    type: "cattles",
  },
  {
    id: 24,
    color: "brown",
    name: "Brown Swiss",
    image: Brown_Swiss,
    type: "cows",
  },
  {
    id: 25,
    color: "brown",
    name: "Brown Swiss",
    image: Brown_Swiss,
    type: "bulls",
  },
  { id: 26, color: "red", name: "Jersey", image: Jersey, type: "cattles" },
  { id: 27, color: "red", name: "Jersey", image: Jersey, type: "cows" },
  { id: 28, color: "red", name: "Jersey", image: Jersey, type: "bulls" },
  {
    id: 29,
    color: "white",
    name: "Ayrshire",
    image: Ayrshire,
    type: "cattles",
  },
  { id: 30, color: "green", name: "Holstein", image: Holstein, type: "cows" },
  {
    id: 31,
    color: "brown",
    name: "Brown Swiss",
    image: Brown_Swiss,
    type: "bulls",
  },
];

const CowFilter = () => {
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [color, setColor] = useState("");

  // const debounce = (fn, delay) => {
  //   let timer;
  //   return function (args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn(...args);
  //     }, delay);
  //   };
  // };

  const filterData = useMemo(() => {
    return cards.filter((card) => {
      const matchSearch = card.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchTypes = type ? card.type === type : true;
      const matchColor = color ? card.color === color : true;
      return matchSearch && matchTypes && matchColor;
    });
  }, [type, search, color]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4 }}>
          <Typography variant="h3">Search</Typography>
          <Grid size={{ xs: 12 }} sx={{ mt: 3 }}>
            <Typography variant="subtitle1">Search Keyword</Typography>
            <TextField
              label="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ mt: 3 }}>
            <Typography>Select color</Typography>
            <Autocomplete
              options={["red", "brown", "white"]}
              sx={{ width: 225 }}
              value={color}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Colors..."
                  onChange={(e) => setColor(e.target.value)}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Grid size={{ xs: 12 }} container spacing={2} sx={{ mt: 1 }}>
            <Button variant="contained" onChange={() => setType("cows")}>
              Cows
            </Button>
            <Button variant="contained" onChange={() => setType("cattles")}>
              Cattles
            </Button>
            <Button variant="contained" onChange={() => setType("bulls")}>
              Bulls
            </Button>
          </Grid>
          <Grid size={{ xs: 12 }} container spacing={2}>
            {filterData.map((card) => (
              <CardComponent key={card.id} name={card.name} image={card.image}>
                <Typography textAlign="center" color="textPrimary">
                  {card.name}
                </Typography>
              </CardComponent>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CowFilter;
