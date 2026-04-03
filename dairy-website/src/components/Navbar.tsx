import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import logo from "../assets/cow_logo.png";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      variant="elevation"
      color="transparent"
      //   elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton>
            <Avatar alt="logo" src={logo} />
          </IconButton>
          <Box sx={{ marginLeft: "auto" }}>
            <Button>Home</Button>
            <Button>Our Cows</Button>
            <Button>Products</Button>
            <Button>Blog</Button>
            <Button variant="contained" color="primary">
              Shop Online
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
