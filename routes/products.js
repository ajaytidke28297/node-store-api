const express = require("express");

const productMethods = require("../controllers/products");

const router = express.Router();

router.get("/", productMethods.getAllProducts);

router.get("/static", productMethods.getAllProductsStatic);

module.exports = router;
