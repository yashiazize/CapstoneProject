const cors = require("cors");
const express = require("express");
const usersController = require("./controllers/usersController");
const bookingsController = require("./controllers/bookingsController");
const availabilityController = require("./controllers/availabilityController");
const ratings = require("./controllers/ratingsController");

const app = express();

app.use(cors());
app.use(express.json());

// USERS Route
app.use("/users", usersController);
// BOOKINGS Route
app.use("/bookings", bookingsController);
// AVAILABILITY Route
app.use("/availability", availabilityController);
//RATINGS
app.use("/ratings", ratings);

// INDEX
app.get("/", (_, res) => {
	res.send("Welcome to our Chef Finder App!");
});

// 404
app.get("*", (_, res) => {
	res.status(404).send("Page Not Found");
});

module.exports = app;
