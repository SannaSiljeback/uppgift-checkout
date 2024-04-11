
![Skärmbild 2024-04-11 223251](https://github.com/SannaSiljeback/uppgift-checkout/assets/144778923/9da673dd-1445-4166-b555-1f842ec82053)


# uppgift-checkout
This is a fullstack webshop application with Stripe integration.
Users can browse products, add them to their cart and purchase them using Stripe's payment integration. The app also includes user authentication functionality, allowing users to register, login, and logout.

## Packages used
* React
* Vite
* Node Express
* Typescript

## Key Features
* User authentication with registration, login, and logout.
* Product listing with the ability to browse and add products to the shopping cart.
* Shopping cart functionality to manage selected items.
* Order placement and payment processing using Stripe integration.


## Set up
* Before getting started, make sure you have Node.js installed. Additionally, you'll need a Stripe account to obtain your API key and set up your own products within your Stripe shop.

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
