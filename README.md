
![Skärmbild 2024-04-11 190017](https://github.com/SannaSiljeback/uppgift-checkout/assets/144778923/685ec2dc-0ac0-42ae-9353-fe7c7846ca8c)

# uppgift-checkout
A fullstack webshop app with Stripe integration.

## Packages used
* React
* Vite
* Node Express
* Typescript

## Key Features
* User login and registration.
* Product listing.
* Ability to add products to a shopping cart.
* Shopping cart functionality.
* Ability to place an order, payment with Stripe integration.

## Set up
* Before starting, ensure you have Node.js installed. You also need a Stripe account to use your own API-key, and your own products in your own shop in Stripe.

* Clone repository from [Github](https://github.com/SannaSiljeback/uppgift-checkout/)
* Navigate to the project directory.

* First, navigate to the client side within the project directory:
1. Run:
```
cd client
```
2. Install dependencies:
```
npm i
```
3. To start the development server:
```
npm run dev
```

* Next, navigate to the server side within the project directory:
1. Run:
```
cd server
```
2. Install dependencies:
```
npm i
```
3. Create a .env file in the project root and add the following:
```
STRIPE_API_KEY ={your_stripe_key}
```
4. To start the server:
```
npm start
```

* Once finished, access the app at http://localhost:5173/ in your browser.
