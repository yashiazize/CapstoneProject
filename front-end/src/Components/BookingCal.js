import { useState } from "react";
import "date-fns";
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
		width: 200,
		marginBottom: 15,
		color: "white",
	},
}));

const BookingCal = ({ setRequest, request }) => {
	const classes = useStyles();

	let today = new Date().toLocaleDateString();
	let newDate = today.split("/").reverse().join("-");

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

	return (
		<div>
			<form className={classes.container} noValidate>
				<div className="bookingCal">
					<TextField
						id="startDate"
						label="Event Start Date and Time"
						type="datetime-local"
						onChange={handleSelectedDate}
						value={eventDate.startDate}
						name="startDate"
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
						// defaultValue="2017-05-24"
						min={newDate}
						defaultValue="color"
						required
					/>
					<TextField
						id="endDate"
						label="Event End Date and Time"
						type="datetime-local"
						onChange={handleSelectedDate}
						value={eventDate.endDate}
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
						required
					/>
				</div>
			</form>
		</div>
	);
};

export default BookingCal;
