const model = require("../model/product");
// const mongoose = require("mongoose");
const Product = model.Product;
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((doc) => {
      res.status(201).json(req.doc);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getALLProducts = (req, res) => {
  const products = Product.find();
  products
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getSpecificProduct = (req, res) => {
  const id = req.params.id;
  const product = Product.findById(id);
  product
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log("error", err);
    });
};
exports.replaceProduct = (req, res) => {
  const id = req.params.id;
  const product = Product.findOneAndReplace({ _id: id }, req.body);
  product.then((doc) => {
    res.status(200).json(doc);
    console.log(doc);
  });
};
exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const product = Product.findOneAndUpdate({ _id: id }, req.body);
  product.then((doc) => {
    res.status(201).json(doc);
    console.log(doc);
  });
};
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  const product = Product.findByIdAndDelete(id);
  product.then((doc) => {
    res.status(200).json(doc);
    console.log(doc);
  });
};
