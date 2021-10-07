import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ chef, starRatings }) => {
  
  return (
    <div>
      <h3 className="review-testamonial">Testimonials</h3>
      <div className="reviews-container">
        <div>
        {starRatings.map((starRating) => {
        return (
          <div key={starRating.id} className="review-border">
            <span className="review-text-name">
              {starRating.name.toUpperCase()}
            </span>
            <span>
              <StarRating aRating={starRating.rating} />
            </span>
            <div className="review-text-comment">
              <i>"{starRating.review}"</i>
            </div>
          </div>
        );     
      })}
        </div>
        {/* <div>
                <span>Reviewer: Daliz</span>
                <span><StarRating rating={3.5}/></span>
                <p>Comment: This chef is amazing!</p>
            </div>
             */}
      </div>
    </div>
  );
};

export default Reviews;
