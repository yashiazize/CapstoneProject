const express = require("express");
const availability = express.Router();

const {
	fetchAllAvailability,
	fetchAvailability,
} = require("../queries/availability");

// AVAILABILITY -- ALL
availability.get("/", async (_, res) => {
	const allAvailability = await fetchAllAvailability();
	res.json({ success: true, payload: allAvailability });
});

// ("users/chefs/:id", --> availability_id === chef_id ???
availability.get("/:id", async (req, res) => {
	const { id } = req.params;
	console.log({ id });
	const chefAvailability = await fetchAvailability(id);
	res.json({ success: true, payload: chefAvailability });
});

module.exports = availability;
