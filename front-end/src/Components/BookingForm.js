import { withRouter } from "react-router-dom";
import { useState } from "react";
import BookingCal from "./BookingCal";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useHistory } from "react-router";

const API = apiURL();

const BookingForm = () => {
	const [request, setRequest] = useState({
		cuisine: "",
		party_size: "",
		address: "",
		address2: "",
		city: "",
		state: "",
		zip_code: "",
		start_event: "",
		end_event: "",
	});
	let history = useHistory();

	const handleChange = (type) => {
		return (e) => setRequest({ ...request, [type]: e.target.value });
	};

	const addNewRequest = async (newRequest) => {
		try {
			await axios.post(`${API}/bookings`, newRequest);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await addNewRequest(request);
		history.pushState("/bookings/:id");
	};

	return (
		<section className="booking">
			<form onSubmit={handleSubmit} className="booking-container">
				<h1 className="booking-heading"> Book Chef</h1>
				<div>
					<label>Select Cuisine:</label>
					<select
						onChange={handleChange("cuisine")}
						className="form-select"
						aria-label="Default select example"
					>
						<option type="text" value={"american"}>
							American
						</option>
						<option type="text" value={"asian"}>
							Asian
						</option>
						<option type="text" value={"carribean"}>
							Carribean
						</option>
						<option type="text" value={"italian"}>
							Italian
						</option>
						<option type="text" value={"french"}>
							French
						</option>
						<option type="text" value={"mediterranean"}>
							Mediterranean
						</option>
					</select>
				</div>
				<div>
					<label>Party Size:</label>
					<select
						onChange={handleChange("party_size")}
						defaultValue=""
						className="form-select"
						aria-label="Default select example"
					>
						<option type="text" value={"1-2"}>
							1-2
						</option>
						<option type="text" value={"3-4"}>
							3-4
						</option>
						<option type="text" value={"4-10"}>
							4-10
						</option>
						<option type="text" value={"10-20"}>
							10-20
						</option>
						<option type="text" value={"20+"}>
							20+
						</option>
					</select>
				</div>
				{/* <label>Dietary Restrictions:</label>
				<div className="form-check col-auto">
					<label for="dairy_free">Dairy Free</label>
					<input
						className="form-check-input"
						type="checkbox"
						name="dairy_free"
					/>
				</div>
				<div className="form-check col-auto">
					<label for="gluten_free"> Gluten Free</label>
					<input
						className="form-check-input"
						type="checkbox"
						name="gluten_free"
					/>
				</div>
				<div className="form-check col-auto"> 
					<label for="kosher">Kosher</label>
					<input className="form-check-input" type="checkbox" name="kosher" />
				</div> */}
				<h3 className="booking-heading">Event Location</h3>
				<div className="form-floating mb-3">
					<input
						value={request.address}
						type="text"
						name="address"
						className="form-control"
						onChange={handleChange("address")}
						required
					/>
					<label for="floatingInput">Address</label>
				</div>
				<div className="form-floating mb-3">
					<input
						value={request.address2}
						type="text"
						name="address2"
						onChange={handleChange("address2")}
						className="form-control"
					/>
					<label for="floatingInput">Address2</label>
				</div>
				<div className="form-floating mb-3 col-md-6">
					<input
						value={request.city}
						type="text"
						name="city"
						className="form-control"
						onChange={handleChange("city")}
						required
					/>
					<label for="floatingInput">City</label>
				</div>
				<div className="form-floating mb-3 col-md-4">
					<input
						value={request.state}
						type="text"
						name="state"
						className="form-control"
						onChange={handleChange("state")}
						required
					/>
					<label for="floatingInput">State</label>
				</div>
				<div className="form-floating mb-3 col-md-4">
					<input
						value={request.zip_code}
						type="text"
						name="zip_code"
						className="form-control"
						onChange={handleChange("zip_code")}
						required
					/>
					<label for="floatingInput">Zip Code</label>
				</div>
				<div>
					<BookingCal setRequest={setRequest} request={request} />
					<input className="loginBtn3" type="submit" />
				</div>
			</form>
		</section>
	);
};

export default withRouter(BookingForm);
