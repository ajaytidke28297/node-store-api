require("dotenv").config();
require("express-async-errors");

const express = require("express");
const db = require("./db/connect");

const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

const productRoute = require("./routes/products");

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hi");
});

app.use("/api/v1/products", productRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await db(process.env.MONGO_URI);
    app.listen(port, console.log("Server is listening..."));
  } catch (error) {
    console.log(error);
  }
};

start();
