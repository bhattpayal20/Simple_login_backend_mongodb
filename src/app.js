const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const indexRouter = require("./routes/index");

const app = express();

app.use(express.json());

connectDb();

const port = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  res.send("Home");
});

app.use("/api", indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
