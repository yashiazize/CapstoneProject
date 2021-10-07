import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const AddReviewForm = ({ starRatings }) => {
  const { id } = useParams;
  let history = useHistory();

  const [name, setName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [rating, setRating] = useState("Rating");
  const [review, setReview] = useState("")//object??????????

  const addChefReview = async (newChefReview) => {
  try {
      await axios.post(`${API}/ratings`, newChefReview);
      history.push(`/ratings`)
  } catch (error) {
      return error
  }
  };

  // const handleTextInput = (e) => {
  // setName({ ...name, [e.target.id]: e.target.value})
  // };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    await addChefReview(review);
    history.push("/:id/ratings"); //or chefs
  };

  useEffect(() => {
    const fetchChefToReview = async () => {
      try {
        let res = await axios.get(`${API}/users/chefs`); //${API}/ratings
        setReview(res.data.payload);
      } catch (error) {
        return error;
      }
    };
    fetchChefToReview();
  }, [id]);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name.toUpperCase()}
            // id= "name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option disabled>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="Review"> Review</label>
          <textarea
            value={reviewComment}
            onChange={(e) => setReviewComment(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleSubmitReview}>Submit</button>
      </form>
    </div>
  );
};

export default AddReviewForm;
