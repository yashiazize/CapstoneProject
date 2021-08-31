const db = require("../db/dbConfig");

const fetchAllUsers = async () => {
	try {
		return await db.any("SELECT * FROM users");
	} catch (err) {
		return err;
	}
};

const fetchUser = async (id) => {
	try {
		return await db.oneOrNone("SELECT * FROM users WHERE id = $1", id);
	} catch (err) {
		return err;
	}
};

const createUser = async (user) => {
	// if user is a chef {do this} else {do that -- regular user}
	// chef? chef specs: user specs
	const { email, name, is_chef, cuisine, zip_code } = user;
	try {
		const newUser = await db.one(
			`INSERT INTO users
            (email, name, is_chef, cuisine, zip_code)
            VALUES($1, $2, $3, $4, $5)
            RETURNING *`,
			[email, name, is_chef, cuisine, zip_code]
		);
		return newUser;
	} catch (err) {
		return err;
	}
};

const updateUser = async (id, user) => {
	const { email, name, is_chef, cuisine, zip_code, image } = user;
	try {
		const query =
			"UPDATE users SET email = $1, name = $2, is_chef = $3, cuisine = $4, zip_code = $5, image = $6 WHERE id = $7 RETURNING *";
		const updatedUser = await db.one(query, [
			email,
			name,
			is_chef,
			cuisine,
			zip_code,
			image,
			id,
		]);
		return updatedUser;
	} catch (err) {
		return err;
	}
};

// CHEFS
const fetchAllChefs = async () => {
	try {
		return await db.any("SELECT * FROM users WHERE is_chef = true");
	} catch (err) {
		return err;
	}
};

module.exports = {
	fetchAllUsers,
	fetchUser,
	createUser,
	updateUser,
	fetchAllChefs,
};
