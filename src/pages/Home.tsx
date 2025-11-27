import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h3">Welcome to CUSC</Typography>
      <Typography variant="body1">
        We build software solutions. Explore our products and services.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" component={Link} to="/dashboard">
          Go to Dashboard
        </Button>
        <Button variant="outlined" component={Link} to="/product/alpha">
          View Product Alpha
        </Button>
      </Stack>
    </Stack>
  );
};

export default Home;
