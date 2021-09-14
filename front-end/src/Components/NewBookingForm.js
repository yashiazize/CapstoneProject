import { withRouter } from "react-router-dom";
import BookingCal from "./BookingCal";
import { Link } from "react-router-dom";

// user can select dates here
// OR
// dates are passed in from the ChefDatails Calendar

const NewBookingForm = () => {

  return (
    <section className="BookingFormContainer">
      <form className="row g-3">
        <h1> Book Chef</h1>
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
        <h3>Event Location</h3>
        <div className="form-floating mb-3">
          <input type="text" class="form-control" required />
          <label for="floatingInput">Address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" class="form-control" />
          <label for="floatingInput">Apt</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input type="text" class="form-control" required />
          <label for="floatingInput">City</label>
        </div>
        <div className="form-floating mb-3 col-md-4">
          <input type="text" class="form-control" required />
          <label for="floatingInput">State</label>
        </div>
        <div>
          <BookingCal />
          <button className="btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );

};

export default withRouter(NewBookingForm);
