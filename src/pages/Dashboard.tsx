import React from "react";
import { Grid, Card, CardContent, CardActions, Typography, Button } from "@mui/material";
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
      <Grid container spacing={3}>
        {products.map((p) => (
          <Grid item xs={12} md={4} key={p.id}>
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
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
