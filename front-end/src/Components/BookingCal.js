import { useState } from "react";
import "date-fns";
// import DateFnsUtils from "@date-io/date-fns";

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
		marginBottom: 10,
		marginTop: 20,
	},
}));

const BookingCal = ({ setRequest, request }) => {
	const classes = useStyles();

	const [eventDate, setEventDate] = useState({
		startDate: new Date(),
		endDate: new Date(),
	});

	const handleSelectedDate = (e) => {
		setEventDate({ ...eventDate, [e.target.id]: e.target.value });
		setRequest({
			...request,
			...{ start_event: eventDate.startDate, end_event: eventDate.endDate },
		});
	};

	const customDates = (date) => {
		return date.getDay() === 0 || date.getDay() === 6;
	};

	return (
		<div>
			<h6 className="booking-heading">Date and time</h6>
			<form className={classes.container} noValidate>
				<TextField
					id="startDate"
					label="Event Start Date and Time"
					type="datetime-local"
					onChange={handleSelectedDate}
					value={eventDate.startDate}
					name="startDate"
					// defaultValue="2017-05-24T10:30"
					required="true"
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
					shouldDisableDate={customDates}
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
