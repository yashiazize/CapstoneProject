import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// needs to take in the dates from when a bookins ia pproved
// --  then block those [dates and/or time slots]

// if a user selects dates HERE the dates will be passed into the
//  -- bookings calendar/page

const ChefCalendar = () => {
	const handleSelectedDate = (ranges) => {
		console.log({ ranges });
	};

	const selectionRange = {
		startDate: new Date(),
		endDate: new Date(),
		key: "selection",
	};

	return (
		<DateRangePicker
			ranges={[selectionRange]}
			onChange={handleSelectedDate}
			showSelectionPreview={true}
			moveRangeOnFirstSelection={false}
		/>
	);
};

export default ChefCalendar;

// import { useState } from "react";
// import Calendar from "react-calendar";
// import DatePicker from "react-datepicker";
// import { addDays } from "date-fns";
// import "react-calendar/dist/Calendar.css";
/* <Calendar onChange={handleDate} value={startDate} /> */
// const [eventDate, setEventDate] = useState([
// 	{
// 		startDate: new Date(),
// 		endDate: addDays(new Date(), 7),
// 		key: "selection",
// 	},
// ]);
