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
		marginBottom: 15,
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
