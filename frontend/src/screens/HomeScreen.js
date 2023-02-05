import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomeScreen() {

  const alert = useAlert();
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const params = useParams();
  const keyword = params.keyword;

  const pageNumber = params.pageNumber || 1;

  


  React.useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const productList = useSelector((state) => state.productList);
  const {  error, products } = productList;

  console.log(products);

  const addToCartHandler = (product) => {
    console.log(product)
    dispatch(addToCart(product))
    navigate('/cart')
}
  return (
    <>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
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
                      {item.name}
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
                      ₹{item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant="contained" onClick={()=> addToCartHandler(item._id)}>
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
