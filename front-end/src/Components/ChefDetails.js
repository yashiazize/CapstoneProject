import axios from "axios";
import { apiURL } from "../util/apiURL.js";
import { useState, useEffect } from "react";
import ChefAvailability from "./ChefAvailability";
import { Link, useParams } from "react-router-dom";
import BookingForm from "./BookingForm";
import imageChef from "../Images/bkgnd-lukas-blazek-unsplash.jpg";

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
			<div className="single-chef-images">
				{/* have multiple images for this chef -- map an array? */}
				<img
					src={imageChef}
					className="img-fluid rounded-start"
					alt={chef.first_name}
				/>
			</div>
			<article className="single-chef-info">
				<h2>
					{chef.first_name} {chef.last_name}
				</h2>
				<h6>Cuisine(s): {chef.cuisine}</h6>
				<p>Rating: ...star system</p>
			</article>
			<div>
				<Link to={`/users/chefs`}>
					<button className="btn-primary" type="button">
						Back
					</button>
				</Link>

				<Link to={`/chefs/${chef.id}/bookings/new`}>
					<button className="btn-primary">Book</button>
				</Link>
			</div>
			<div className="single-chef-info">
				<article className="info">
					<h3>bio:</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
						explicabo asperiores sequi soluta quae sit tempore delectus corrupti
						recusandae, animi ea ab! Sint, voluptas id? Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Blanditiis sequi odio suscipit ea
						similique nobis.
					</p>
				</article>
				<article className="info">
					<h6>Availability: {chef.availability}</h6>
					<ChefAvailability chefAvail={chefAvail} />
				</article>
			</div>
			<BookingForm />
		</section>
	);
};

export default ChefDetails;
