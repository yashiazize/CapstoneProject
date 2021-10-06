import axios from "axios";
import { apiURL } from "../util/apiURL.js";
import { useState, useEffect } from "react";
import ChefAvailability from "./ChefAvailability";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews.js";
import BookingForm from "./BookingForm.js";
import AddReviewForm from "./AddReviewForm.js";

const API = apiURL();

const ChefDetails = ({ chefs, startRatings }) => {
	const [chef, setChef] = useState({});
	const [chefAvail, setChefAvail] = useState({});
	let { id } = useParams();

	useEffect(() => {
		const fetchSingleChef = async () => {
			try {
				const res = chefs.filter((chef) => chef.id === id);
				const resAvail = await axios.get(`${API}/availability/${id}`);
				setChef(res[0]);
				setChefAvail(resAvail.data.payload);
			} catch (err) {
				return err;
			}
		};
		fetchSingleChef();
	}, [id, chefs]);

	if (!chef) {
		return null;
	}

	return (
		<section className="single-chef">
			<div className="single-chef-img-avail">
				<img
					src={chef.img_url}
					className="img-fluid rounded-start"
					alt={chef.first_name}
				/>
				<article className="info">
					<h3>Chef's Availability:</h3>
					<ChefAvailability chefAvail={chefAvail} />
				</article>
			</div>
			<div className="chef-info-form">
				<div className="single-chef-info">
					<article className="single-chef-info">
						<h2>
							{chef.first_name} {chef.last_name}
						</h2>
						<h6>Cuisine(s): {chef.cuisine}</h6>
					</article>
					<article className="info">
						<h3>bio:</h3>
						<p>{chef.bio}</p>
					</article>
					<div>
						<Reviews starRatings={starRatings} />
						<AddReviewForm starRatings={starRatings} />
					</div>
				</div>
				<div className="chef-booking-form">
					<BookingForm chef={chef} />
				</div>
			</div>
		</section>
	);
};

export default ChefDetails;
