import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ChefCalendar from "./ChefCalendar";

const ChefDetails = ({ chefs }) => {
	const [chef, setChef] = useState({});
	let { id } = useParams();

	useEffect(() => {
		const fetchSingleChef = async () => {
			try {
				const res = chefs.filter((chef) => chef.id === Number(id));
				setChef(res[0]);
			} catch (err) {
				return err;
			}
		};
		fetchSingleChef();
	}, [id]);

	return (
		<div>
			chef profile details, calendar for bookings, rating, bio
			<div className="card">
				<div>
					<h4>image of chef here</h4>
				</div>
				<div>
					<h2>{chef.name}</h2>
					<p>Cuisine(s): {chef.cuisine}</p>
					<div>
						<h3>Chef bio:</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
							explicabo asperiores sequi soluta quae sit tempore delectus
							corrupti recusandae, animi ea ab! Sint, voluptas id? Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Blanditiis sequi odio
							suscipit ea similique nobis.
						</p>
					</div>
				</div>
			</div>
			<br />
			<div>
				<h3>Chef's Availability Calendar</h3>
				<ChefCalendar />
			</div>
			<br />
			<div>
				<Link to={`/users/chefs`}>
					<button className="btn-primary" type="button">
						Back
					</button>
				</Link>
			</div>
			<br />
			<div>
				<Link to={`/bookings/new`}>
					<button className="btn-primary">Book</button>
				</Link>
			</div>
		</div>
	);
};

export default ChefDetails;
