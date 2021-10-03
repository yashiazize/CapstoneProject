// import axios from "axios";
// import { apiURL } from "../util/apiURL";
// import StarRating from "./StarRating"

const RequestDetails = ({ booking }) => {
	let start = new Date(booking.start_event);
	let endDate = new Date(booking.end_event).toDateString("en-US");
	let endTime = new Date(booking.end_event).toLocaleTimeString("en-US");

	let startDate = new Date(booking.start_event).toDateString("en-US");
	let startTime = new Date(booking.start_event).toLocaleTimeString("en-US");
	let d = booking.start_event;
	// let today = new Date();
	// today.toISOString().split("T")[0];

	return (
		<section className="requestsCard">
			<div className="card" style={{ width: "25rem" }}>
				<div className="card-body">
					<h3 className="card-title">Event Type: {booking.event_type} </h3>
					<p className="card-text"> </p>

					<p className="card-text">Chef:</p>
					<h5>Start Time: {startTime}</h5>
					<h5>Start Date: {startDate}</h5>
					<p className="card-text">End Date: {endDate}</p>
					<p className="card-text">End Time: {endTime}</p>
					<p>
						Address: {booking.address} {booking.city}, {booking.state}
						{booking.zip}
					</p>
					<p className="card-text"></p>
					{/* <div className="detailsButtons">
                <Link >
                  <button className="loginBtn">Edit</button>
                </Link>
                <button >Delete</button>
              </div> */}
				</div>
			</div>
			<div>{/* <StarRating /> */}</div>
		</section>
	);
};

export default RequestDetails;
