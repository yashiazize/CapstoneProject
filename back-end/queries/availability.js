const db = require("../db/dbConfig");

const fetchAllAvailability = async () => {
	try {
		return await db.any("SELECT * FROM availability");
	} catch (err) {
		return err;
	}
};

module.exports = { fetchAllAvailability };
