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

module.exports = { fetchAllAvailability, fetchAvailability };
