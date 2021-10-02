const express = require("express");
const users = express.Router();
const bookingsController = require("./bookingsController");

const {
	fetchAllUsers,
	fetchUser,
	createUser,
	updateUser,
	fetchAllChefs,
} = require("../queries/users");

users.use("/:userId/bookings", bookingsController);
// CHEFS
users.get("/chefs", async (_, res) => {
	const allChefs = await fetchAllChefs();
	res.json({ success: true, payload: allChefs });
});

users.get("/", async (_, res) => {
	try {
		const allUsers = await fetchAllUsers();
		res.json({ success: true, payload: allUsers });
	} catch (error) {
		console.log(error);
	}
});

users.get("/:id", async (req, res) => {
	const { id } = req.params;
	const user = await fetchUser(id);
	res.json({ success: true, payload: user });
});

users.post("/", async (req, res) => {
	const newUser = await createUser(req.body);
	if (newUser.id) {
		res.json({ success: true, payload: newUser });
	} else {
		res.json({ success: false, payload: "Error" });
	}
});

users.put("/:id", async (req, res) => {
	const { id } = req.params;
	const updatedUser = await updateUser(id, req.body);
	res.json({ success: true, payload: updatedUser });
});

module.exports = users;
