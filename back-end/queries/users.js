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
	const { id, email, first_name, last_name, is_chef, cuisine } = user;
	console.log(user);
	try {
		const newUser = await db.one(
			`INSERT INTO users
            (id, email, first_name, last_name, is_chef, cuisine)
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *`,
			[id, email, first_name, last_name, is_chef, cuisine]
		);
		return newUser;
	} catch (err) {
		return err;
	}
};

const updateUser = async (id, user) => {
	const { email, name, is_chef, cuisine, image } = user;
	try {
		const query =
			"UPDATE users SET email = $1, name = $2, is_chef = $3, cuisine = $4, image = $5 WHERE id = $6 RETURNING *";
		const updatedUser = await db.one(query, [
			email,
			name,
			is_chef,
			cuisine,
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
