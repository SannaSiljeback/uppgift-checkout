const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./resources/users/users.router");
const authRouter = require("./resources/auth/auth.router");
const stripeRouter = require("./stripe/stripe.router");
const productsRouter = require("./resources/products/products.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    secret: "secretKey",
    maxAge: 1000 * 60 * 60,
  })
);

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/payments", stripeRouter);
app.use("/products", productsRouter);

app.listen(3001, () => console.log("Server is up and running!"));
