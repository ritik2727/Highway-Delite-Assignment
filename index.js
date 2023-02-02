import express from "express";
import dotenv from "dotenv";
import colors from "colors";

const app = express();

app.get("/", (req, res) => {
  res.send("API is running....");
});


const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
     .yellow.bold
  )
);
