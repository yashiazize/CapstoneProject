const ChefInfo = ({ handleChange }) => {
  return (
    <div>
      <div>
        <label>Select Cuisine:</label>
        <select
          onChange={handleChange("cuisine")}
          className="cuisine-select"
          aria-label="Default select example"
        >
          <option type="text" value={"american"}>
            American
          </option>
          <option type="text" value={"asian"}>
            Asian
          </option>
          <option type="text" value={"carribean"}>
            Carribean
          </option>
          <option type="text" value={"italian"}>
            Italian
          </option>
          <option type="text" value={"french"}>
            French
          </option>
          <option type="text" value={"mediterranean"}>
            Mediterranean
          </option>
        </select>
      </div>
      <label>Availibility:</label>
      <div className="daysOf">
        <div className="form-check col-auto">
          <label for="monday">Monday</label>
          <input className="form-check-input" type="checkbox" name="monday" />
        </div>
        <div className="form-check col-auto">
          <label for="tuesday"> Tuesday</label>
          <input className="form-check-input" type="checkbox" name="Tuesday" />
        </div>
        <div className="form-check col-auto">
          <label for="wednesday">Wednesday</label>
          <input
            className="form-check-input"
            type="checkbox"
            name="wednesday"
          />
        </div>
        <div className="form-check col-auto">
          <label for="thursday">Thursday</label>
          <input className="form-check-input" type="checkbox" name="thursday" />
        </div>
        <div className="form-check col-auto">
          <label for="friday">Friday</label>
          <input className="form-check-input" type="checkbox" name="friday" />
        </div>
        <div className="form-check col-auto">
          <label for="saturday">Saturday</label>
          <input className="form-check-input" type="checkbox" name="Saturday" />
        </div>
        <div className="form-check col-auto">
          <label for="sunday">Sunday</label>
          <input className="form-check-input" type="checkbox" name="sunday" />
        </div>
      </div>
    </div>
  );
};

export default ChefInfo;
