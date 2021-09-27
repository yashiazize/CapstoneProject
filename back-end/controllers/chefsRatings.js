const express = require("express");
const chefsRating = express.Router({
    mergeParams: true,
  });

const {
    allChefRatings,
    aRatingForChef,
    newRatingForChef,
} = require("../queries/ratings");

chefsRating.get("/", async (req, res) => {
    const AllChefWithRatings = await allChefRatings();
    res.json({success: true, payload: AllChefWithRatings})
});

chefsRating.get("/:id", async (req, res) => {
    try {
        const { chef_id } = req.params;
        const singleStarRating = await aRatingForChef(chef_id);
        if(singleStarRating["booking_id"]){
            res.json({success: true, payload: singleStarRating})
        }else{
            throw singleStarRating
        }
    }catch(error){
    res.status(404).json({success: false, payload: "Rating not found", error: error})
    }
});

chefsRating.post("/", async (req, res) => {
   const create = await newRatingForChef(req.body);
   res.json({success: true, payload: create})
    });

module.exports = chefsRating;