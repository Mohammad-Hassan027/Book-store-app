const mongoose = require("mongoose");
const dbURI = process.env.MONGODB_URI;

const connectDb = () => {
  mongoose
    .connect(dbURI)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Database connection error:", error);
    });
};

module.exports = connectDb;
