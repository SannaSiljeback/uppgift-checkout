const { log } = require("console");
const fetchUsers = require("../../utils/fetchUsers");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");
const initStripe = require("../../stripe");

const register = async (req, res) => {
  const { email, password } = req.body;
  const stripe = initStripe();

  //kolla så att användaren inte redan finns
  const users = await fetchUsers();
  const userAlreadyExists = users.find((u) => u.email === email);

  console.log(userAlreadyExists);
  if (userAlreadyExists) {
    return res.status(400).json("User already exists");
  }


  //skapa kund i stripe, stripe behöver inte några lösen
  const customer = await stripe.customers.create({
    email,
  });

  //if sats om vi ej hitta användaren



  //kryptera lösen
  const hashedPassword = await bcrypt.hash(password, 10);

  //spara till databas
  const newUser = {
    email,
    password: hashedPassword,
    stripeId: customer.id,
  }; //kunden ska ha ett id
  users.push(newUser);

  await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2));

  //skicka tillbaka ett svar
  res.status(201).json(newUser.email);
};

const login = async (req, res) => {
  //kolla om användaren finns
  const { email, password } = req.body;

  const users = await fetchUsers();
  const userExists = users.find((u) => u.email === email);

  //kolla om lösenordet stämmer och att användaren finns
  if (!userExists || !(await bcrypt.compare(password, userExists.password))) {
    return res.status(400).json("Wrong user or password");
  }

  //skapa en session
  req.session.user = userExists;

  //skicka tillbaka ett svar
  res.status(200).json(userExists);
};

const logout = (req, res) => {
  req.session = null;
  res.status(200).json("Logged out");
};

const authorize = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json("You are not logged in");
  }
  res.status(200).json(req.session.user.email);
};

module.exports = { register, login, logout, authorize };
