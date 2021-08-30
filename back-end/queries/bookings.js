const db = require("../db/dbConfig");

const fetchAllBookings = async () => {
	try {
		return await db.any("SELECT * FROM bookings");
	} catch (err) {
		return err;
	}
};

const fetchBooking = async (id) => {
	try {
		return await db.oneOrNone("SELECT * FROM bookings WHERE id =$1", id);
	} catch (err) {
		return err;
	}
};

const createBooking = async (newBooking) => {
	const {
		chef_id,
		user_id,
		status,
		cuisine,
		event_date,
		start_time,
		end_time,
	} = newBooking;
	try {
		const res = await db.one(
			`INSERT INTO bookings
            (chef_id, user_id, status, cuisine, event_date, start_time, end_time )
            VALUES($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
			[chef_id, user_id, status, cuisine, event_date, start_time, end_time]
		);
		return res;
	} catch (err) {
		return err;
	}
};

const updateBooking = async (id, booking) => {
	const {
		chef_id,
		user_id,
		status,
		cuisine,
		event_date,
		start_time,
		end_time,
	} = booking;
	try {
		const query =
			"UPDATE bookings SET chef_id =$1, user_id =$2, status = $3, cuisine = $4, event_date = $5, start_time = $6, end_time = $7 WHERE id = $8 RETURNING *";
		const updatedBooking = await db.one(query, [
			chef_id,
			user_id,
			status,
			cuisine,
			event_date,
			start_time,
			end_time,
			id,
		]);
		return updatedBooking;
	} catch (err) {
		return err;
	}
};

module.exports = {
	fetchAllBookings,
	fetchBooking,
	createBooking,
	updateBooking,
};
