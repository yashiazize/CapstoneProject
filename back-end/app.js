const cors = require("cors");
const express = require("express");
const usersController = require("./controllers/usersController");
const bookingsController = require("./controllers/bookingsController");

const app = express();

app.use(cors());
app.use(express.json());

// USERS Route
app.use("/users", usersController);
// BOOKINGS Route
app.use("/bookings", bookingsController);

// INDEX
app.get("/", (_, res) => {
	res.send("Welcome to our Chef Finder App!");
});

// 404
app.get("*", (_, res) => {
	res.status(404).send("Page Not Found");
});

module.exports = app;
