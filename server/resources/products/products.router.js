const express = require("express");
const { getProducts } = require("./products.controllers");
const router = express.Router();

router.get("/", getProducts);

module.exports = router;