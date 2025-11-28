import React from "react";
import { Box, Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const products = [
  { id: "alpha", name: "Product Alpha", desc: "Workflow management platform." },
  { id: "beta", name: "Product Beta", desc: "Analytics & reporting suite." },
  { id: "gamma", name: "Product Gamma", desc: "Customer engagement toolkit." },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Box className="dashboard-grid">
        {products.map((p) => (
          <Box key={p.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/product/${p.id}`}>
                  Open Landing
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Dashboard;
