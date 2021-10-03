import axios from "axios";
import { apiURL } from "../util/apiURL.js";
import { useState, useEffect } from "react";
import ChefAvailability from "./ChefAvailability";
import { useParams } from "react-router-dom";
import imageChef from "../Images/bkgnd-lukas-blazek-unsplash.jpg";
import Reviews from "./Reviews.js";
import BookingForm from "./BookingForm.js";

const API = apiURL();

const ChefDetails = ({ chefs }) => {
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
					src={imageChef}
					className="img-fluid rounded-start"
					alt={chef.first_name}
				/>
				<article className="info">
					<h3>Chef's Availability Calendar</h3>
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
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
							explicabo asperiores sequi soluta quae sit tempore delectus
							corrupti recusandae, animi ea ab! Sint, voluptas id? Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Blanditiis sequi odio
							suscipit ea similique nobis.
						</p>
					</article>
					<div>
						<Reviews />
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
