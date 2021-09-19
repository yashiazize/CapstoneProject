const db = require("../db/dbConfig");

const collectiveChefsRatings = async (chefId) => {
    try{
        const allRatings = await db.any(
            `SELECT * FROM reviews WHERE chef_id = $1`, chefId
        );
        return allRatings;
    } catch (error) {
        return error;
    }
};

const aRatingForChef = async (bookingId) => {
    try{
        const singleRatingForChef = await db.one(
            `SELECT * FROM reviews WHERE booking_id =$1`, bookingId
        );
        return singleRatingForChef; 
    } catch (error){
        return error;
    }
};

const newRatingForChef= async ( starRating, chefId) => {
    const { user_id, rating} = starRating;
    try {
        const newRating = await db.one(
            `INSERT INTO ratings (user_id, rating)
            VALUES ($1, $2)
            RETURNING *
            `,
[user_id, rating, chefId]
        );        
return newRating;
    } catch (error) {
        return error;
    }
};

module.exports = {
    collectiveChefsRatings,
    aRatingForChef,
    newRatingForChef,
};
