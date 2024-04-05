const express = require("express");
const { getProducts } = require("./products.controllers");
const router = express.Router();

router.get("/", getProducts); //varför funkar med bara "/"?

module.exports = router;