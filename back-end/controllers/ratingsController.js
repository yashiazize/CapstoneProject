const express = require("express");
const ratings = express.Router({
	mergeParams: true,
});

const {
	allChefRatings,
	aRating,
	newRatingForChef,
} = require("../queries/ratings");

//get all ratings
ratings.get("/", async (req, res) => {
	const { chef_id } = req.params;
	const AllChefWithRatings = await allChefRatings(chef_id);
	res.json({ success: true, payload: AllChefWithRatings });
});

//get single rating
ratings.get("/:id", async (req, res) => {
	const { user_id } = req.params;
	const singleStarRating = await aRating(user_id);
	res.json({ success: true, payload: singleStarRating });
});

//create rating
ratings.post("/", async (req, res) => {
	const create = await newRatingForChef(req.body);
	res.json({ success: true, payload: create });
});

module.exports = ratings;
