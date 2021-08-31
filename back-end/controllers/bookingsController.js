const express = require("express");
const bookings = express.Router();

const {
	fetchAllBookings,
	fetchBooking,
	createBooking,
	updateBooking,
} = require("../queries/bookings");

bookings.get("/", async (_, res) => {
	const allBookings = await fetchAllBookings();
	res.json({ success: true, payload: allBookings });
});

bookings.get("/:id", async (req, res) => {
	const { id } = req.params;
	const booking = await fetchBooking(id);
	res.json({ success: true, payload: booking });
});

bookings.post("/", async (req, res) => {
	const newBooking = await createBooking(req.body);
	res.json({ success: true, payload: newBooking });
});

bookings.put("/:id", async (req, res) => {
	const { body, params } = req;
	const { event_date, start_time, end_time } = body;

	if (!event_date || !start_time || !end_time) {
		res.status(422).json({
			error: true,
			success: false,
			message: "Missing information, try again.",
		});
	} else {
		const editedBooking = await updateBooking(params.id, body);
		res.json({ success: true, payload: editedBooking });
	}
});

module.exports = bookings;
