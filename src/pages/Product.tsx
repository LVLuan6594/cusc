import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Stack, Button } from "@mui/material";

const Product: React.FC = () => {
  const { id } = useParams();

  // In a real app, fetch by id. For now, just render dynamic content.
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Product: {id}</Typography>
      <Typography variant="body1">
        This is the landing page for product "{id}". Add description, screenshots, and CTA here.
      </Typography>
      <Button variant="contained" color="primary">Contact Sales</Button>
    </Stack>
  );
};

export default Product;
