require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./database");
const app = express();
const PORT = process.env.PORT || 5000;
const BookRouter = require("./routes/book-routes");
const AdminRouter = require("./routes/admin-routes");
const OrderRouter = require("./routes/order-routes");
const AdminStatsRouter = require("./routes/admin-stats-routes");
const frontendUrl = process.env.FRONTEND_URL;
connectDb();
app.use(express.json());
app.use(
  cors({
    origin: [frontendUrl, "http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/books", BookRouter);
app.use("/api/auth", AdminRouter);
app.use("/api/order", OrderRouter);
app.use("/api/stats", AdminStatsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
