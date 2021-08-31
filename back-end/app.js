const cors = require("cors");
const express = require("express");
const usersController = require("./controllers/usersController");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersController);

app.get("/", (req, res) => {
	res.send("Welcome to our Chef Finder App!");
});

module.exports = app;
