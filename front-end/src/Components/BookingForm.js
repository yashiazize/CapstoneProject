import { withRouter } from "react-router-dom";
import { useState } from "react";
import BookingCal from "./BookingCal";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useHistory, useParams } from "react-router";
import { useAuth } from "../Providers/AuthProvider";

const API = apiURL();

const BookingForm = ({ chef }) => {
  const { id } = useParams();
  const chef_id = id;
  const { currentUser } = useAuth();
  const [request, setRequest] = useState({
    event_type: "",
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
      const chefRequest = {
        chef_id: chef_id,
        user_id: currentUser.uid,
        chef: `chef.first_name chef.last_name`,
        ...newRequest,
      };
      let res = await axios.post(`${API}/bookings`, chefRequest);
      console.log("CHEFR", res.data.payload);
      return res;
    } catch (err) {
      return "error";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userID = currentUser.uid;
    let res = await addNewRequest(request);
    history.push(`/users/${userID}/bookings`);
  };

  return (
    <section className="booking">
      <div className="booking-container">
        <p className="booking-heading"> Book Chef</p>
        <div className="selects">
          <div>
            <p>Select Event Type:</p>
            <select
              onChange={handleChange("event_type")}
              className="form-select"
              aria-label="Default select example"
            >
              <option type="text" value={"Birthday Party"}>
                Birthday Party
              </option>
              <option type="text" value={"Corporate Event"}>
                Corporate Event
              </option>
              <option type="text" value={"Dinner Party"}>
                Dinner Party
              </option>
              <option type="text" value={"Meal Prep"}>
                Meal Prep
              </option>
              <option type="text" value={"Brunch"}>
                Brunch
              </option>
              <option type="text" value={"Other"}>
                Other
              </option>
            </select>
          </div>
          <div className="booking-box">
            <p>Party Size</p>
			<div>
            <input
              value={request.party_size}
              type="number"
              name="party_size"
              onChange={handleChange("party_size")}
            />
          </div>
		  </div>
        </div>
        <p className="booking-heading1">Event Location</p>
        <div className="booking-box">
          <p>Address</p>
          <div>
            <input
              value={request.address}
              type="text"
              name="address"
              onChange={handleChange("address")}
              required
            />
          </div>
        </div>
        <div className="booking-box">
          <p>Address2</p>
          <div>
            <input
              value={request.address2}
              type="text"
              name="address2"
              onChange={handleChange("address2")}
            />
          </div>
        </div>
        <div className="booking-box">
          <p>City</p>
          <div>
            <input
              className=""
              value={request.city}
              type="text"
              name="city"
              onChange={handleChange("city")}
              required
            />
          </div>
        </div>
        <div className="city-state">
          <div className="booking-box">
            <p>State</p>
            <div>
              <input
                value={request.state}
                type="text"
                name="state"
                onChange={handleChange("state")}
                required
              />
            </div>
          </div>
          <div className="booking-box">
            <p>Zip Code</p>
            <div>
              <input
                value={request.zip_code}
                type="text"
                name="zip_code"
                onChange={handleChange("zip_code")}
                required
              />
            </div>
          </div>
        </div>
        <div>
          <p className="booking-heading1">Event Start & End Time</p>
          <BookingCal setRequest={setRequest} request={request} />
          <button onClick={handleSubmit} className="loginBtn3" type="submit">
            {" "}
            Book{" "}
          </button>
        </div>
      </div>
    </section>
  );
};
export default withRouter(BookingForm);
