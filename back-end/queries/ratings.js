const db = require("../db/dbConfig");

const allChefRatings = async () => {
	try {
		const allRatings = await db.any("SELECT * FROM ratings");
		return allRatings 
	} catch (err) {
		return console.log("error in queries- allChefRatings");
	}
};

const collectiveAverage = async () => {
try {
	const ratingData = await db.any(
		`SELECT * FROM users left join (select chef_id, COUNT (*), TRUNC(AVG(rating),1) as average_rating FROM ratings GROUP BY chef_id) ratings on users.id = ratings.chef_id`
	);
	return ratingData
} catch (error) {
	return console.log('error in queries- collectiveAverage')
}
};

//no need to fetch a single rating
const aRating = async (id) => {
	try {
		const singleRating = await db.any(
			`SELECT * FROM ratings WHERE chef_id = $1`,
			id
		);
		const singleRatingData = await db.any(
			`SELECT * FROM users left join (select chef_id COUNT (*), TRUNC(AVG(rating),1) as average_rating FROM ratings GROUP BY chef_id) ratings on users.id = ratings.chef_id where id = $1`,
			id
		);
		return singleRating 
		//&& singleRatingData
	} catch (err) {
		return console.log("error in queries- aRating");
	}
};

// creates new star rating
const newRatingForChef = async (starRating) => {
	const { chef_id, user_id, name, review, rating } = starRating;
	try {
		const newRating = await db.one(
			`
			INSERT INTO ratings (chef_id, user_id, name, review, rating)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
            `,
			[chef_id, user_id, name, review, rating]
		);
		return newRating;
	} catch (err) {
		return console.log("error in queries- newRatingForChef");
	}
};

module.exports = {
	allChefRatings,
	collectiveAverage,
	aRating,
	newRatingForChef,
};
