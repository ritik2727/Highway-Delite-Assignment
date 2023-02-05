import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

import { addToCart, removeFromCart } from "../actions/cartActions";
import { CART_CLEAR_ITEMS } from "../constants/cartConstants";
import { Typography } from "@mui/material";
import Colors from "../components/Colors";

const CartScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const productId = params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  //   const cartSaveDb = useSelector((state) => state.cartSaveDb);
  //   const { success } = cartSaveDb;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    // if (productId) {
    //   dispatch(addToCart(productId, qty));
    // }
    // if (success) {
    //   navigate("/login?redirect=/shipping");
    // //   dispatch({ type: CART_DB_RESET });
    //   localStorage.removeItem('cartItems')
    //   dispatch({ type: CART_CLEAR_ITEMS })
    // }
  }, [dispatch, productId, qty, navigate]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    navigate("/cart");
  };

  // const checkoutHandler = () => {
  //   navigate("/login?redirect=/shipping")
  // }
  const checkoutHandler = () => {
    if(!userInfo){
      navigate('/login')
    }
    else{
        navigate('/shipping')
    }
  };

  return (
    <Row>
      <Col md={8}>
        {cartItems.length === 0 ? (
          <Typography variant="h5" style={{ marginTop: "2em" }}>
            Your cart is empty <Link to="/" style={{color:'blue'}}>Go Back</Link>
          </Typography>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.product}
                style={{
                  //   backgroundColor: "rgb(34 43 69)",
                  borderColor: Colors.SubBlack,
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                  boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                  color: "black",
                }}
              >
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Typography style={{ color: "black" }}>
                      {item.name}
                    </Typography>
                  </Col>
                  <Col md={2}>₹{item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      style={{ backgroundColor: "red" }}
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item
              style={{
                borderColor: Colors.SubBlack,
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                color: "black",
              }}
            >
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              ₹
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                // backgroundColor: "rgb(34 43 69)",
                borderColor: Colors.SubBlack,
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                color: "black",
              }}
            >
              <Button
                type="button"
                // className="btn-block"
                style={{
                  backgroundColor: "blue",
                  borderColor: Colors.SubWhite,
                  color: Colors.white,
                }}
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
