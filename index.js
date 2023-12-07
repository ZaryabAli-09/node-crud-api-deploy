const express = require("express");
const productRouter = require("./routes/product");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
// importing environment variables
require("dotenv").config();

// db connection
main().catch((err) => console.log(err));
async function main() {
  mongoose.connect(
    "mongodb+srv://zky000:qwer123@cluster0.he7ekdc.mongodb.net/ecomDB?retryWrites=true&w=majority"
  );
  console.log("db connected");
}

// body parsers
app.use(express.json());
app.use(cors());
app.use("/", productRouter.routes);
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
