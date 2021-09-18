const express = require("express");
const availability = express.Router();

const { fetchAllAvailability } = require("../queries/availability");

// AVAILABILITY -- ALL
availability.get("/", async (_, res) => {
	const allAvailability = await fetchAllAvailability();
	res.json({ success: true, payload: allAvailability });
});

module.exports = availability;
