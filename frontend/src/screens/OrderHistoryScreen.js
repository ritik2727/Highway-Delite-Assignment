import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { listMyOrders } from "../actions/orderActions";

import Colors from "./../components/Colors";
import { Typography } from "@mui/material";

const OrderHistoryScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name ) {
        // dispatch({ type: USER_UPDATE_PROFILE_RESET });
        // dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
    }
  }
  }, [dispatch, navigate, userInfo,user]);

  return (
    <Row>
      <Col>
        <Typography variant="h5">My Orders</Typography>
        {loadingOrders ? (
          <Typography>Loading...</Typography>
        ) : errorOrders ? (
          <Typography variant="danger">{errorOrders}</Typography>
        ) : (
          <Table
            striped
            bordered
            hover
            responsive
            className="table-sm"
            variant="dark"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
            
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default OrderHistoryScreen;
