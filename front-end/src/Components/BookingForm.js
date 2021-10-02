import { withRouter } from "react-router-dom";
import { useState } from "react";
import BookingCal from "./BookingCal";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useHistory, useParams } from "react-router";
import { useAuth } from "../Providers/AuthProvider";

const API = apiURL();

const BookingForm = () => {
  const { chef_id } = useParams();
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
        ...newRequest,
      };
      await axios.post(`${API}/bookings`, chefRequest);
      debugger
      history.push("/bookings/:id");
    } catch (error) {}
  };

  console.log(request)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewRequest(request);
    history.push("/bookings/:id");
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
              <option type="text" value={"Corporate Function"}>
                Corporate Function
              </option>
              <option type="text" value={"Dinner Party"}>
                Dinner Party
              </option>
              <option type="text" value={"Other"}>
                Other
              </option>
            </select>
          </div>
          <div>
            <p>Party Size:</p>
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
          <button onClick={handleSubmit} className="loginBtn3" type="submit"> Book </button>
        </div>
      </div>
    </section>
  );
};

export default withRouter(BookingForm);
