import { useState } from "react";
// import Calendar from "react-calendar";
// import DatePicker from "react-datepicker";
// import { DateRangePicker } from "react-date-range";
// import { addDays } from "date-fns";
import "react-calendar/dist/Calendar.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

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

const ChefCalendar = () => {
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
		<>
			<h3>Select date and time for booking</h3>
			<form className={classes.container} noValidate>
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
		</>
	);
};

export default ChefCalendar;
// const [eventDate, setEventDate] = useState([
// 	{
// 		startDate: new Date(),
// 		endDate: addDays(new Date(), 7),
// 		key: "selection",
// 	},
// ]);

/* <Calendar onChange={handleDate} value={startDate} /> */

/* <DateRangePicker
				ranges={eventDate}
				onChange={handleSelectedDate}
				showSelectionPreview={true}
				moveRangeOnFirstSelection={false}
			/> */
