require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// Connect database
connectDB();

// Your existing routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});