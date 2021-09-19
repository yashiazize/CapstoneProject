const express = require("express");
const chefRating = express.Router();

const {
    collectiveChefsRatings,
    aRatingForChef,
    newRatingForChef,
} = require("../queries/ratings");

chefRating.get("/", async (req, res) => {
    const { chef_id } = req.params;
    const chefRatings = await collectiveChefsRatings(chef_id);
    res.json({success: true, payload: chefRatings})
});

chefRating.get("/:booking_id", async (req, res) => {
    try {
        const { booking_id } = req.params;
        const singleStarRating = await aRatingForChef(booking_id);
        if(singleStarRating["booking_id"]){
            res.json({success: true, payload: singleStarRating})
        }else{
            throw singleStarRating
        }
    }catch(error){
    res.status(404).json({success: false, payload: "Rating not found", error: error})
    }
});

chefRating.post("/", async (req, res) => {
    try {
        const { chef_id } = req.params;
        const create = await newRatingForChef(req.body, chef_id);
        if(create["chef_id"]){
        res.json({success: true, payload: create})
        }else{
            throw create
        }
    } catch (error) {
        res.status(404).json({success: false, payload: "Rating not found", error: error});
    }
});

module.exports = chefRating;