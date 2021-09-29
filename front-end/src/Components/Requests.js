import axios from "axios"
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import { useAuth } from "../Providers/AuthProvider";
import RequestDetails from "./RequestDetails";

const API = apiURL();

const Requests = () => {

    const { currentUser } = useAuth()
    const [bookings, setBookings] = useState([]);
    const currentUserId = currentUser.uid;

    useEffect(() => {
        const fetchAllBookings = async () => {
          console.log("chicken", currentUserId)
          const res = await axios.get(`${API}/users/${currentUserId}/bookings/`);
          setBookings([res.data.payload]);
          try {
          } catch (error) {
            console.log(error);
          }
        };
        fetchAllBookings();
      }, [currentUserId]);
 console.log("pickles", bookings)
    return (
        <div>
            {bookings.map((booking) => {
					return <RequestDetails key={booking.id} booking={booking} />;
				})}
                <p>bookings</p>
        </div>
    )
}

export default Requests;