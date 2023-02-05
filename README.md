# Highway-delite-assignment

## Develop an e-commerce application with the following features.

- List at least 10 items that are available for purchase.
- Can add, remove, change quantity of items in the cart.
- User must login to place the order.
- Items in the cart must be persisted across login.
- Should receive an email with relevant order information when order placed.
- An option to see the past orders.

## To run the application

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = url
JWT_SECRET = ABC123
PASS=your email password for nodemailer
```


### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev
# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

## Frontend Port - 3000

- Technologies used are <b>Reactjs, Material UI, Redux, Axios, CSS, react-alert.</b>

- Home page display all products,
- User can add,remove item and increase qty in cart,
- Redux is used for global state management
- React router dom to manage the routing
- various react hooks like useState(for state update), useEffect(for data rendering) is used
- various redux hooks like useSelector(to get the global state of the data), useDispatch(to dispatch the actions to the global reducers)
- react-alert is used to give good UI alert messages on performing certain actions.
- Axios is used for API calling from backend server
- material ui and its icons are used to build the UI framework and the styling of the pages
- order page shows the previous order history.
- user receives a mail after placing the order and can see his order details in the order page

## Backend Port - 5000

- Technologies used are <b>Expressjs, Nodejs,Nodemailer, bcryptjs, concurrently, cors, dotenv, jsonwebtoken, MongoDB.</b>

- The products api displays all the products in /products route
- Login Authentication is implemented along with user registration
- along with authorisation is implemented using json web token for session storage
- MVC architecture is followed in the backend
- root file index.js is the root of the application
- Nodemailer is used to send mail to user when user placed any order.
- cors is used for cross site connection
- bcryptjs is used to generate salt and hash the password for extra security
- MongoDb database is used to store the data using mongoose
- concurrently is used to run the backend and the frontend server simultaneously
