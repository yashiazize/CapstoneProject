const db = require("../db/dbConfig");

const fetchAllAvailability = async () => {
	try {
		return await db.any("SELECT * FROM availability");
	} catch (err) {
		return err;
	}
};

// pass in chef_id
const fetchAvailability = async (id) => {
	try {
		return await db.oneOrNone(
			"SELECT * FROM availability WHERE chef_id = $1",
			id
		);
	} catch (err) {
		return err;
	}
};

const createAvailability = async (newAvailability) => {
	const {
		chef_id,
		sunday,
		monday,
		tuesday,
		wednesday,
		thursday,
		friday,
		saturday,
	} = newAvailability;
	try {
		const res = await db.one(
			`INSERT INTO availability
			()
			VALUES ()
			RETURNING *`,
			[chef_id, sunday, monday, tuesday, wednesday, thursday, friday, saturday]
		);
		return res;
	} catch (err) {
		return err;
	}
};

const updateAvailability = async (id, availability) => {
	const {
		chef_id,
		sunday,
		monday,
		tuesday,
		wednesday,
		thursday,
		friday,
		saturday,
	} = availability;
	try {
		const query =
			"UPDATE availability SET chef_id = $1, sunday = $2, monday = $3, tuesday = $4, wednesday = $5, thursday = $6, friday = $7 WHERE id =$ RETURNING *";
		const updateAvailability = await db.one(query, [
			chef_id,
			sunday,
			monday,
			tuesday,
			wednesday,
			thursday,
			friday,
			saturday,
		]);
		return updateAvailability;
	} catch (err) {
		return err;
	}
};

module.exports = {
	fetchAllAvailability,
	fetchAvailability,
	createAvailability,
	updateAvailability,
};
