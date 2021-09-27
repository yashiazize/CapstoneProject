const db = require("../db/dbConfig");

const allChefRatings = async () => {
    try{
return await db.any("SELECT * FROM ratings");
    } catch (err) {
        return console.log("error in queries- allChefRatings")
    }
};

//no need to fetch a single rating
const aRating = async (user_id) => {
    try{
        return await db.one(`SELECT * FROM ratings WHERE user_id = $1 OR chef_id = $1`, [user_id])
    } catch (err){
        return console.log("error in queries- aRating")
    }
};

// creates new star rating
const newRatingForChef = async ( starRating) => {
    const { rating, chef_id, user_id} = starRating;
    try {
        const newRating = await db.one(
            `
            INSERT INTO ratings (rating, chef_id, user_id)
            VALUES ($1, $2, $3)
            RETURNING *
            `,
[rating, chef_id, user_id]
        );        
return newRating;
    } catch (err) {
        return console.log("error in queries- newRatingForChef")
    }
};

module.exports = {
    allChefRatings,
    aRating,
    newRatingForChef,
};
