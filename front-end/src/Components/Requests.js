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
	debugger;

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
					console.log("HERE", res.data);
					console.log("Bookings =>", bookings);
					debugger;
				} catch (error) {
					console.log(error);
				}
			}
		};
		fetchAllBookings();
		console.log("fetch", currentUserId);
	}, [currentUserId]);
	debugger;
	if (!currentUser || !bookings.length) {
		return null;
	}

	return (
		<div>
			{bookings.map((booking) => {
				return <RequestDetails key={booking.id} booking={booking} />;
			})}
			<p>bookings</p>
		</div>
	);
};

export default Requests;
