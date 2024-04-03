const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
require("dotenv").config();
const initStripe = require("./stripe");

const userRouter = require("./resources/users/users.router");
const authRouter = require("./resources/auth/auth.router");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

//för att parsea bodyn
app.use(express.json());
app.use(
  cookieSession({
    secret: "secretKey",
    maxAge: 1000 * 60 * 60, //1 timme
  })
);

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

//app.get /users blir routern, allt som har med användare att göra läggs i den
app.get("/users", (req, res) => {
  // req, res funktionerna läggs i controller
});

app.listen(3001, () => console.log("Server up and running!"));