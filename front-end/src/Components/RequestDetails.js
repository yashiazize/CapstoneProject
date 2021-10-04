// import axios from "axios";
// import { apiURL } from "../util/apiURL";
// import StarRating from "./StarRating"

const RequestDetails = ({ booking }) => {
	const endDate = new Date(booking.end_event).toDateString("en-US");
	const endTime = new Date(booking.end_event).toLocaleTimeString("en-US");

	const startDate = new Date(booking.start_event).toDateString("en-US");
	const startTime = new Date(booking.start_event).toLocaleTimeString("en-US");

	return (
		<section className="requestsCard">
			<div className="card" style={{ width: "25rem" }}>
				<div className="card-body">
					<h3 className="card-title">Event Type: {booking.event_type} </h3>
					<p className="card-text"> </p>

					<p className="card-text">Chef:</p>
					<p className="card-text">Party Size: {booking.party_size}</p>
					<h5>Start Time: {startTime}</h5>
					<h5>Start Date: {startDate}</h5>
					<p className="card-text">End Date: {endDate}</p>
					<p className="card-text">End Time: {endTime}</p>
					<p>
						Address: {booking.address} {booking.address2} {booking.city},{" "}
						{booking.state} {booking.zip_code}
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
