import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const AddReviewForm = ({ starRatings }) => {
  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [rating, setRating] = useState("Rating");

  const [review, setReview] = useState({})//object??????????


  const addChefReview = async (newChefReview) => {
  try {
      await axios.post(`${API}/users/${id}/ratings`, newChefReview);
     history.push(`users/ratings`)
  } catch (error) {
      return error
  }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
     await addChefReview(review);
    history.push(`/chefs/${id}`);
  };

  useEffect(() => {
    const fetchChefToReview = async () => {
      try {
        let res;
        res = await axios.get(`${API}/users/${id}`);
        setReview(res.data.payload);
      } catch (error) {
        return error;
      }
    };
    fetchChefToReview();
  }, [id]);
  return (
    <div>
      <div className="review-form-enclose">
      <form onSubmit={handleSubmitReview}  className="review-form-container">
        <h5 className="review-form-heading">Rate Your Chef</h5>
        <div className="review-form-name">
          <label htmlFor="name"></label>
          <input
            id="ame"
            value={name.toUpperCase()}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="review-form-select">  
          <label htmlFor="rating"></label>
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
        <div className="review-form-divider"></div>
        <div>
          <label htmlFor="Review"></label>
          <textarea
            value={reviewComment}
            onChange={(e) => setReviewComment(e.target.value)}
            placeholder="Write your review..."
            className="review-form-text-area"
          ></textarea>
        </div>
        <button className="review-form-button">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default AddReviewForm;
