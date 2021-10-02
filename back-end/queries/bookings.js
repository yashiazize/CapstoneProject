const db = require("../db/dbConfig");

const fetchAllBookings = async () => {
	try {
		return await db.one("SELECT * FROM bookings");
	} catch (error) {}
};
const fetchUserBookings = async (user_id) => {
	try {
		const userBookings = await db.any(
			"SELECT * FROM bookings WHERE user_id = $1 OR chef_id = $1",
			user_id
		);
		return { success: true, payload: userBookings };
	} catch (error) {
		return { success: false, payload: error };
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
		event_type,
		party_size,
		address,
		address2,
		city,
		state,
		zip_code,
		start_event,
		end_event,
	} = newBooking;
	try {
		const res = await db.one(
			`INSERT INTO bookings
            (chef_id, user_id, event_type, party_size, address, address2, city, state, zip_code,  start_event, end_event )
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING *`,
			[
				chef_id,
				user_id,
				event_type,
				party_size,
				address,
				address2,
				city,
				state,
				zip_code,
				start_event,
				end_event,
			]
		);
		return res;
	} catch (err) {
		console.log(err);
		return err;
	}
};

const updateBooking = async (id, booking) => {
	const {
		chef_id,
		user_id,
		event_type,
		party_size,
		address,
		address2,
		city,
		state,
		zip_code,
		start_event,
		end_event,
	} = booking;
	try {
		const query =
			"UPDATE bookings SET chef_id =$1, user_id =$2, event_type = $3,  party_size = $4, address = $5, address2 = $6, city = $7, state = $8, zip_code = $9, start_event = $10, end_event = $11 WHERE id = $12 RETURNING *";
		const updatedBooking = await db.one(query, [
			chef_id,
			user_id,
			event_type,
			party_size,
			address,
			address2,
			city,
			state,
			zip_code,
			start_event,
			end_event,
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
	fetchUserBookings,
};
