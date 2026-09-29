const express = require("express");

const app = express();

app.use(express.json());


// Import admin routes
const adminRoutes = require("./routes/admin_routes");


// Use admin routes
app.use("/admin", adminRoutes);


// Home route
app.get("/", (req, res) => {
    res.send("Server is working");
});


// Start server
app.listen(2829, () => {
    console.log("Server running on port 2829");
});
