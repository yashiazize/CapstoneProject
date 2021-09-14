import { useState } from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const BookingCal = () => {
  const classes = useStyles();

  const [eventDate, setEventDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleSelectedDate = (e) => {
    setEventDate({ ...eventDate, [e.target.id]: e.target.value });

    console.log(eventDate);
  };

  return (
    <div>
      <form className={classes.container} noValidate>
        <label>Select Cuisine:</label>
        <select>
          <option>American</option>
          <option>Asian</option>
          <option>Carribean</option>
          <option>Italian</option>
          <option>French</option>
          <option>Mediterranean</option>
        </select>

        <label>Party Size:</label>
        <select>
          <option>1-2</option>
          <option>3-4</option>
          <option>4-10</option>
          <option>10-20</option>
          <option>20+</option>
        </select>

        <label>Dietary Restrictions:</label>
        <label for="dairy_free">Dairy Free</label>
        <input type="checkbox" name="dairy_free" />

        <label for="gluten_free"> Gluten Free</label>
        <input type="checkbox" name="gluten_free" />

        <label for="kosher">Kosher</label>
        <input type="checkbox" name="kosher" />

        <h3>Event Location</h3>
        <label>Address</label>
        <input required />
        <label>Apt</label>
        <input />
        <label>City</label>
        <input required />
        <label>State</label>
        <input required />

        <h3>Select date and time for booking</h3>
        <TextField
          id="startDate"
          label="Event Start Date and Time"
          type="datetime-local"
          onChange={handleSelectedDate}
          value={eventDate.startDate}
          name="startDate"
          // defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="endDate"
          label="Event End Date and Time"
          type="datetime-local"
          // defaultValue={new Date()}
          onChange={handleSelectedDate}
          // name="endDate"
          value={eventDate.endDate}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
};

export default BookingCal;
