import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomeScreen() {
  return (
    <>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://images.bewakoof.com/t540/ghost-of-uchiha-men-s-t-shirt-387427-1634624585-1.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "2D2D2D",
                        fontFamily: "12px sans-serif",
                        fontWeight: 500,
                        lineHeight: 1,
                      }}
                      component="p"
                    >
                      Ghost of Uchiha Round Neck T-Shirt
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "black",
                        fontSize: "1.25rem",
                        fontWeight: 300,
                      }}
                      component="p"
                    >
                      ₹500
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant="contained">
                      ADD To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
