const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to contact management app." })
);

// Define Routes here
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log("Server listening on port " + PORT);
});
