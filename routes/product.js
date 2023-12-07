const express = require("express");
const pRouter = express.Router();
const productController = require("../controller/product");

pRouter
  .post("/products", productController.createProduct)
  .get("/products", productController.getALLProducts)
  .get("/products/:id", productController.getSpecificProduct)
  .put("/products/:id", productController.replaceProduct)
  .patch("/products/:id", productController.updateProduct)
  .delete("/products/:id", productController.deleteProduct);
exports.routes = pRouter;
