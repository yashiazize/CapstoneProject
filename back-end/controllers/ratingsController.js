const express = require("express");
const ratings = express.Router({
	mergeParams: true,
});

const {
	allChefRatings,
	aRating,
	newRatingForChef,
} = require("../queries/ratings");

ratings.get("/", async (req, res) => {
    const { chef_id } = req.params
    const allChefWithRatings = await allChefRatings(chef_id);
    res.json({success1: true, payload: allChefWithRatings})
});

ratings.get("/:id", async (req, res) => {
        const { id } = req.params;
        const singleStarRating = await aRating(id);
        res.json({success2: true, payload: singleStarRating})
});

ratings.post("/", async (req, res) => {
   const create = await newRatingForChef(req.body);
   res.json({success3: true, payload: create})
    });

module.exports = ratings;
