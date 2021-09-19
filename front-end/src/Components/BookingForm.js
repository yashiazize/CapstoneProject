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
    event_date: "",
    start_time: "",
    end_time: "",
  });
  let history = useHistory();

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
    history.pushState("/bookings/:id")
  };

  return (
    <section className="booking">
      <form onSubmit={handleSubmit} className="booking-container">
        <h1 className="booking-heading"> Book Chef</h1>
        <div>
          <label>Select Cuisine:</label>
          <select className="form-select" aria-label="Default select example">
            <option>American</option>
            <option>Asian</option>
            <option>Carribean</option>
            <option>Italian</option>
            <option>French</option>
            <option>Mediterranean</option>
          </select>
        </div>
        <div>
          <label>Party Size:</label>
          <select className="form-select" aria-label="Default select example">
            <option>1-2</option>
            <option>3-4</option>
            <option>4-10</option>
            <option>10-20</option>
            <option>20+</option>
          </select>
        </div>
        <label>Dietary Restrictions:</label>
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
        </div>
        <h3 className="booking-heading">Event Location</h3>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" required />
          <label for="floatingInput">Address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" />
          <label for="floatingInput">Apt</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input type="text" className="form-control" required />
          <label for="floatingInput">City</label>
        </div>
        <div className="form-floating mb-3 col-md-4">
          <input type="text" className="form-control" required />
          <label for="floatingInput">State</label>
        </div>
        <div>
          <BookingCal />
          <input className="loginBtn3" type="submit"/>
            
        </div>
      </form>
    </section>
  );
};

export default withRouter(BookingForm);
