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

// AVAILABILITY FOR A SPECIFIC CHEF
// ("users/chefs/:id", --> availability_id === chef_id ???
availability.get("/:id", async (req, res) => {
	const { id } = req.params;
	const chefAvailability = await fetchAvailability(id);
	res.json({ success: true, payload: chefAvailability });
});

// create
availability.post("/", async (req, res) => {
	const newAvailability = await createAvailability(req.body);
	res.json({ success: true, payload: newAvailability });
});

//  edit availability
availability.put("/:id", async (req, res) => {
	const editedAvailability = await updateAvailability(req.params, req.body);
	res.json({ success: true, payload: editedAvailability });
});

module.exports = availability;
