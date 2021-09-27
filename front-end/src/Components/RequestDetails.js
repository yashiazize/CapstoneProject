import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
import { apiURL } from "../util/apiURL";
import StarRating from "./StarRating"

const API = apiURL();

const RequestDetails = () => {
  const { currentUser } = useAuth()
  let history = useHistory();
  const [booking, setBooking] = useState({});

  useEffect(() => {
    const fetchAllBookings = async () => {
      const currentUserId = currentUser.uid;
      console.log(currentUserId)
      const res = await axios.get(`${API}/users/${currentUserId}/bookings/`);
      setBooking(res.data.payload);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBookings();
  }, []);

 
 
  return (
    <section className="requestsCard">
      <h2>Bookings</h2>
      <div className="card" style={{width: "25rem"}}>
        <div className="card-body">
              <h3 className="card-title"> </h3>
              <p className="card-text"> {booking.start_event} {booking.end_event} </p>
              <p className="card-text">Event Type: {booking.event_type} </p>
              <p className="card-text">Chef:</p>
              <p>Address: {booking.address} {booking.city} {booking.state} </p>
              <p className="card-text"></p>
              <div className="detailsButtons">
                <Link >
                  <button className="loginBtn">Edit</button>
                </Link>
                <button >Delete</button>
              </div>
            </div>
      </div>
      <div>
     <StarRating />
      </div>
    </section>
  );
};

export default RequestDetails;
