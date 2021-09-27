import React, { useState, useEffect } from "react";
import { useHistory, withRouter, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import axios from "axios";
// import { FaStar } from "react-icons/fa";
import "../Styles/Stars.css";

const API = apiURL();


const StarRating = () => {
const { id } = useParams();
let history = useHistory();

const [newRating, setNewRating] = useState(
    {
        rating: "",
        chef_id: "",
        user_id: ""
  }
  );
  // const [hover, setHover] = useState(null);
  const [user, setUser] = useState({});

  const handleRatingChange = (event) => {
    setNewRating({ ...newRating, [event.target.id]: Number(event.target.value) })
  };

  const addRating = async (newChefRating) => {
    try{
      await axios.post(`${API}/ratings`,newChefRating)
    } catch(error){
      return error;
    }
  };
  

  const handleSubmit = async (event) => { 
    event.preventDefault();
    await addRating(newRating);
    history.push(`/ratings/${id}`)
  };

//   useEffect(() => {
//     const fetchChefToRate = async () => {
//       try {
//         let res;
// res = await axios.get(`${API}/users/${id}`);
// setUser(res.data.payload)
//       }catch (error){
//         return error;
//       }
//     }
//     fetchChefToRate()
//   },[id])


  return (
    <div>
      <h2>Status: Accepted</h2>
      <p>chef id, user id, bookings id</p>
      <form onSubmit={handleSubmit}>
      {/* {[...Array(5)].map((star, i) => {
        const ratingScore = i + 1;
        return (
          <label>
            <input
            id="rating"
              type="radio"
              name="rating"
              value={ratingScore}
              className="rating"
              onChange={handleRatingChange}
              onClick={() => setRating(ratingScore)}
            />
            <FaStar className="star" 
            color={ratingScore <= (hover || rating) ? "#ff7700" : "#ececec"}
            onMouseEnter={() => setHover(ratingScore)}
            onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })} */}
      <label>Number Rating</label>
      <input 
      value={newRating.rating}
      type="number"
      onChange={handleRatingChange}
      />
          <label>Chef id #</label>
      <input 
      value={newRating.chef_id}
      type="number"
      onChange={handleRatingChange}

      />
          <label>User id</label>
      <input 
      value={newRating.user_id}
      type="number"
      onChange={handleRatingChange}
      />
      <button>Submit</button>
      </form>
      
      						{/* <p>Rating: {rating}</p> */}
    </div>
  );
};

export default StarRating;
