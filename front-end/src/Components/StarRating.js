import React from "react";
import { FaStarHalf, FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(<FaStar color="ff7700" />);
		} else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
			stars.push(<FaStarHalf color="ff7700" FaStar color="ff7700" />);
		} else {
			stars.push(<FaStar color="ececec" />);
		}
	}
	return <>{stars}</>;
};

export default StarRating;
