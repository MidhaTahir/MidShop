import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRouter.js";

dotenv.config();

connectDB()

const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/products/',productRouter)

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server has started to run on ${port} in ${process.env.NODE_ENV} mode`.bgGreen
  )
);
