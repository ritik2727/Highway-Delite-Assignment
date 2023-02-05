import React, { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../components/Colors";
import { Typography } from "@mui/material";
import { getOrderDetails } from "../actions/orderActions";

const OrderScreen = () => {
  const params = useParams();
  const navigation = useNavigate();
  const orderId = params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!userInfo) {
      navigation("/login");
    }
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, userInfo, navigation, orderId, order, userInfo,]);

  return loading ? (
    <Typography>loading</Typography>
  ) : error ? (
    <Typography variant="danger">{error}</Typography>
  ) : (
    <>
      <Typography variant="h4" style={{ marginBottom: "1.5em" }}>
        Order {order._id}
      </Typography>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item
              style={{
           
                borderColor: Colors.SubBlack,
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                color: 'black',
              }}
            >
              <Row className="d-flex flex-lg-row flex-md-row flex-sm-column flex-xs-column">
                <Col>
                  <h4>Shipping</h4>
                  <p>
                    <strong>Name: </strong> {order.user?.name}
                  </p>
                  <p>
                    <strong>Email: </strong>{" "}
                    <a
                      href={`mailto:${order.user?.email}`}
                      style={{ color: 'black' }}
                    >
                      {order.user?.email}
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong>
                    {order.shippingAddress.address},{" "}
                    {order.shippingAddress.city}{" "}
                    {order.shippingAddress.postalCode},{" "}
                    {order.shippingAddress.country}
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                // backgroundColor: "rgb(34 43 69)",
                borderColor: Colors.SubBlack,
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                color: 'black',
              }}
            >
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Typography>Order is empty</Typography>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      style={{
                        // backgroundColor: "rgb(34 43 69)",
                        borderColor: Colors.SubBlack,
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                        color: 'black',
                      }}
                    >
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link
                            to={`/product/${item.product}`}
                            style={{ color: 'black' }}
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item
                style={{
                  // backgroundColor: "rgb(34 43 69)",
                  borderColor: Colors.SubBlack,
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                  boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                  color:'black',
                }}
              >
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                   // backgroundColor: "rgb(34 43 69)",
                   borderColor: Colors.SubBlack,
                   backgroundImage:
                     "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                   boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                   color:'black',
                }}
              >
                <Row>
                  <Col>Total</Col>
                  <Col>₹{order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
