import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import userRoutes from "./backend/routes/userRoutes.js";
import productRoutes from "./backend/routes/productRoutes.js";
import { notFound, errorHandler } from "./backend/middleware/errorMiddleware.js";
import morgan from "morgan";
import ConnectDB from './backend/config/db.js';

dotenv.config();
ConnectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running....");
});


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());


app.use("/api/products", productRoutes);
app.use("/api/users",userRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
     .yellow.bold
  )
);
