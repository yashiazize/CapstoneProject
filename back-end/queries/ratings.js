const db = require("../db/dbConfig");

const allChefRatings = async () => {
    try{
return await db.any(`SELECT * FROM ratings`);
    } catch (err) {
        return err;
    }
};

//no need to fetch a single rating
const aRating = async (id) => {
    try{
        return await db.one(`SELECT * FROM ratings WHERE id = $1`, id);
    } catch (err){
        return err;
    }
};

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
        return err;
    }
};

module.exports = {
    allChefRatings,
    aRating,
    newRatingForChef,
};
