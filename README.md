<div align="center" id="top"> 
  <img src="/client/public/image.png" alt="Book Store App" />

&#xa0;

<a href="https://book-store-app-mu-nine.vercel.app/">Deployed working link</a>

</div>

<h1 align="center">Book Store App</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/Mohammad-Hassan027/Book-store-app?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/Mohammad-Hassan027/Book-store-app?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Mohammad-Hassan027/Book-store-app?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/Mohammad-Hassan027/Book-store-app?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/Mohammad-Hassan027/Book-store-app?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/Mohammad-Hassan027/Book-store-app?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/Mohammad-Hassan027/Book-store-app?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Book Store App 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/Mohammad-Hassan027/Book-store-app" target="_blank">Author</a>
</p>

<br>

## 🎯 About

This Book Store App is a robust e-commerce platform developed using the MERN stack (MongoDB, Express, React, Node.js). The primary goal of this project is to provide a comprehensive, end-to-end solution for a digital book store.

The application allows visitors to browse a wide variety of books, while registered users can take advantage of advanced features like a persistent shopping cart, a secure checkout page, and the ability to view their order history. For administrators, the app offers a powerful admin dashboard to manage all aspects of the store, from book inventory to user accounts, making it a complete and scalable solution.

The application’s front end is built with React for a dynamic user interface, while the back end, powered by Node.js and Express, handles the API logic and communication with a MongoDB database. Key features include a full shopping cart system, secure user authentication with Firebase, and distinct dashboards for users and administrators. This project showcases a complete development flow, from managing data in the database to providing a seamless user experience.

## ✨ Features

### ☑️ Full E-commerce Functionality:

A complete shopping experience from browsing to checkout.\

### ☑️ View All Books:

Display a list of all available books with essential details like title and author.\

### ☑️ Shopping Cart:

Users can add books to a persistent shopping cart, manage quantities, and remove items before proceeding to checkout.\

### ☑️ Secure Checkout Process:

A dedicated checkout page to finalize orders, with a secure and user-friendly interface.\

### ☑️ Order Management:

A "Your Orders" page allows users to view their purchase history and track the status of past orders.\

### ☑️ User Dashboard:

A personalized dashboard for registered users to manage their profile, view order history, and control account settings.\

### ☑️ Admin Dashboard:

A powerful dashboard for administrators to manage all aspects of the application, including book inventory, user accounts, and order fulfillment.\

### ☑️ Email Verification:

A crucial step in the sign-up process that ensures user accounts are linked to a valid email address

### ☑️ CRUD Operations:

Full CRUD (Create, Read, Update, Delete) capabilities for book management, allowing administrators to easily add new books, update existing ones, and remove entries.\

### 🔐 User Authentication:

Securely manage user accounts with Firebase authentication.\

### ☑️ Responsive Design:

A seamless and attractive user experience on any device, from desktops to mobile phones, thanks to Tailwind CSS.\

## 🚀 Technologies

The following tools were used in this project:

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Firebase](https://firebase.google.com/docs/)
- [Tailwind](https://tailwindcss.com/)
- [Mongo DB](https://www.mongodb.com/)

## ✅ Requirements

Before starting 🚩, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## ✅ Environment Configuration

Copy the environment template and configure your settings:

### For server

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
PORT=5000
JWT_SECRET_KEY="your_secrect_key"
MONGODB_URI="uri"
FRONTEND_URL="https://localhost:5173"
BACKEND_URL="https://localhost:5000"
```

### For client

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
VITE_FRONTEND_URL="https://localhost:5173"
VITE_BACKEND_URL="http://localhost:5000"
VITE_API_KEY="key"
VITE_AUTH_DOMAIN="domain"
VITE_PROJECT_ID="id"
VITE_STORAGE_BUCKET="bucket"
VITE_MESSAGING_SENDER_ID="id"
VITE_APP_ID="id"
VITE_MEASUREMENT_ID="id" # optional
```

## 🚩 Starting

```bash
# Clone this project
$ git clone https://github.com/Mohammad-Hassan027/Book-store-app.git

# Access
$ cd book-store-app

# Access
$ cd server

# Install dependencies
$ npm install

# Run the project
$ npm run start:dev

# The server will initialize in the <http://localhost:5000> 🚀

# Access
$ cd client

# Install dependencies
$ npm install

# Run the project
$ npm run dev

# The server will initialize in the <http://localhost:5173> 🚀
```

## Project Structure

```
├── cliend/
│   ├── public/
│   │   ├── fav-icon.png
│   │   ├── image.png
│   │   └── vite.svg
│   ├── src/
│   │   ├── api/
│   │   │   |── admin-api.jsx
│   │   │   |── book-api.jsx
│   │   │   └── order-api.jsx
│   │   ├── assest/
│   │   │   └── index.js
│   │   ├── component/
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── BookCardSkeleton.jsx
│   │   │   ├── CartTile.jsx
│   │   │   ├── EmailVerification.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── InputField.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── looaderStyle.css
│   │   │   ├── Login.jsx
│   │   │   ├── Navebar.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── SelectField.jsx
│   │   │   └── Skeleton.jsx
│   │   ├── config/
│   │   │   └── firebaseConfig.js
│   │   ├── context/
│   │   │   ├── create-context.jsx
│   │   │   └── index.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useAuthErrorToast.js
│   │   │   └── useFirebaseAuth.js
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── dashboard/
│   │   │   └── book/
│   │   ├── routes/
│   │   │   ├── router.jsx
│   │   │   ├── PrivateRoutes.jsx
│   │   │   └── adminRoutes.jsx      # Authentication routes
│   │   ├── utils/
│   │   │   ├── getAuthHeaders.js
│   │   │   ├── getbaseUrl.js
│   │   │   └── getImage.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example                 # Environment variables template
│   ├── .gitignore                   # Git ignore file
│   ├── package.json                 # Dependencies and scripts
│   ├── vercel.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── README.md                    # This file
│──  server/
│   ├── src/
│   │   ├── controllers/
│   │   │   |── auth-controller.js    # Authentication logic
│   │   │   |── book-controller.js
│   │   │   └── order-controller.js
│   │   ├── database/
│   │   │   └── index.js
│   │   ├── middlewares/
│   │   │   └── VerifyAdminToken.js
│   │   ├── models/
│   │   │   ├── user-model.js        # User schema
│   │   │   ├── order-model.js       # Order schema
│   │   │   └── book-model.js        # Book schema
│   │   ├── routes/
│   │   │   ├── order-routes.js
│   │   │   ├── book-routes.js
│   │   │   ├── admin-stats-routes.js
│   │   │   └── admin-routes.js      # Authentication routes
│   │   └── helper/
│   ├── .env.example                 # Environment variables template
│   ├── .gitignore                   # Git ignore file
│   ├── package.json                 # Dependencies and scripts
│   ├── server.js                    # Main server file
│   ├── vercel.json
│   └── README.md                    # This file
├── LICENSE,md                   
├── .gitignore                   # Git ignore file
└── README.md                    # This file
```

## 📝 License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with 💖 by <a href="https://github.com/Mohammad-Hassan027" target="_blank">Mohammad Hassan</a>

&#xa0;

<a href="#top">Back to top</a>
