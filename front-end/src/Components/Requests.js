import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import { useAuth } from "../Providers/AuthProvider";
import RequestDetails from "./RequestDetails";
import { useParams } from "react-router";

const API = apiURL();

const Requests = () => {
	const { currentUser } = useAuth();
	const [bookings, setBookings] = useState([]);
	const { user_id } = useParams();
	const currentUserId = user_id;

	useEffect(() => {
		const fetchAllBookings = async () => {
			if (currentUserId) {
				try {
					const res = await axios.get(
						`${API}/users/${currentUserId}/bookings/`
					);
					setBookings(res.data.payload);
				} catch (error) {
					return error;
				}
			}
		};
		fetchAllBookings();
	}, [currentUserId]);

	if (!currentUser || !bookings.length) {
		return null;
	}

	return (
		<section>
			<div className="bookings-list-container">
				{bookings.map((booking) => {
					return <RequestDetails key={booking.id} booking={booking} />;
				})}
			</div>
		</section>
	);
};

export default Requests;
