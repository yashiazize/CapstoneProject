import React from "react";
import StarRating from "./StarRating";

const Reviews = () => {
	return (
		<div>
			<div>
				<span>Reviewer: Daliz</span>
				<span>
					<StarRating rating={3.5} />
				</span>
			</div>
			<div>
				<p>Comment: This chef is amazing!</p>
			</div>
		</div>
	);
};

export default Reviews;
