const Product = require("../models/product");

exports.getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products, nbHits: products.length });
};

exports.getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};
