const express = require("express");
const ratings = express.Router(
    {
    mergeParams: true
  }
  );

const {
    allChefRatings,
    aRating,
    newRatingForChef,
} = require("../queries/ratings");

//get all ratings
ratings.get("/", async (req, res) => {
    const { chef_id } = req.params
    const AllChefWithRatings = await allChefRatings(chef_id);
    res.json({success: true, payload: AllChefWithRatings})
});

//get single rating
ratings.get("/:id", async (req, res) => {
        const { id } = req.params;
        const singleStarRating = await aRating(id);
        res.json({success1: true, payload: singleStarRating})
});
//23
//create rating
ratings.post("/", async (req, res) => {
   const create = await newRatingForChef(req.body);
   res.json({success: true, payload: create})
    });

module.exports = ratings;