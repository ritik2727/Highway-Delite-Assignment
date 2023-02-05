import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import nodemailer from "nodemailer";
import User from "../models/userModel.js";
// @desc    Create new order
// @route   POST /api/order
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, totalPrice } =
    req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      totalPrice,
    });
    const user = await User.findById(req.user._id);

    const createdOrder = await order.save();
    mailer(user.email, user.name, shippingAddress, totalPrice);
    res.status(201).json(createdOrder);
  }
});

// @desc    Get order by id
// @route   GET /api/order/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

const mailer = (email,name,shippingAddress, totalPrice) => {
  console.log(email,shippingAddress, "sds");
  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "reactjsdeveloper45@gmail.com",
      pass: `${process.env.PASS}`,
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log("error", error);
    } else {
      console.log("Ready to Send");
    }
  });

  var mail = {
    from: "reactjsdeveloper45@gmail.com",
    to: email,
    subject: "Your Order Has been Placed| LUKJURY SHOP",
    html: `<p style="font-size: 16px" >LUKJURY SHOP</p>
    <p style="font-size: 16px" >Email: ${email}</p>
    <p style="font-size: 16px" >name: ${name}</p>
    <p style="font-size: 16px" >Address: ${shippingAddress.address}</p>
    <p style="font-size: 16px" >City: ${shippingAddress.city}</p>
    <p style="font-size: 16px" >Postal Code: ${shippingAddress. postalCode}</p>
    <p style="font-size: 16px" >Country: ${shippingAddress.country}</p>
    <p style="font-size: 16px" >Total price : ${totalPrice}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("error", error);
    } else {
      console.log("send");
    }
  });
  //
  // mailOptions = {
  //   to: email,
  //   subject: "We Have Received Your Message",
  //   html: `
  //   Hello
  //   Thanks for sending us a message! We’ll get back to you as soon as possible.`
  // };
  // contactEmail.sendMail(mailOptions);
  // //
};

export { addOrderItems, getOrderById, getMyOrders };
