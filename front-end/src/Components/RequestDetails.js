const RequestDetails = ({ booking }) => {
	// const endDate = new Date(booking.end_event).toDateString("en-US");
	const endTime = new Date(booking.end_event).toLocaleTimeString(
		navigator.language,
		{ hour: "2-digit", minute: "2-digit" }
	);

	const startDate = new Date(booking.start_event).toDateString("en-US");
	const startTime = new Date(booking.start_event).toLocaleTimeString(
		navigator.language,
		{ hour: "2-digit", minute: "2-digit" }
	);

	return (
		<div className="card mb-3 bookings-list-card">
			<div className="row g-0">
				<div className="booking-header">
					<h3>Event Type: {booking.event_type} </h3>
				</div>
				<div className="card-body">
					<div className="booking-times">
						<p>
							<h5>Party Size:</h5>
							{booking.party_size}
						</p>
						<p>
							<h5>Service Type:</h5>
							{booking.pricing_option}
						</p>
						<p>
							<h5>Event Date & Time: </h5>
							{startDate} from {startTime} to {endTime}
						</p>
					</div>
					<div className="booking-address">
						<p>
							<h5>Address:</h5>
							<p>
								{booking.address} {booking.address2}
							</p>
							<p>
								{booking.city}, {booking.state} {booking.zip_code}
							</p>
						</p>
					</div>
				</div>
			</div>
			<div>{/* <StarRating /> */}</div>
		</div>
	);
};

export default RequestDetails;
