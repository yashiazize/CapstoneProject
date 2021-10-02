import { useState } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// Round 2

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Styles = styled.div`
	.react-datepicker-wrapper,
	.react-datepicker__input-container,
	.react-datepicker__input-container input {
		width: 275px;
	}

	.react-datepicker__close-icon::before,
	.react-datepicker__close-icon::after {
		background-color: #ee7c19;
	}
`;

const ChefCalendar = ({ availability }) => {
	const [startDate, setStartDate] = useState(new Date(null));
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	// const customDates = ["2021-10-10", "2021-10-12"];
	const disableDate = () => {
		return null;
	};

	return (
		<Styles>
			<br />

			<DatePicker
				isClearable
				filterDate={(d) => {
					return new Date() < d;
				}}
				placeholderText="Select Event Date"
				showTimeSelect
				dateFormat="MMMM d, yyyy h:mmaa"
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				selectsStart // tells this DatePicker that it is part of a range*
				startDate={startDate}
				// disabledDays={[0, 6]}
				// disabledDays={{ daysOfWeek: [0, 2, 4, 6] }}
				// disabledWeekDays={[0, 3]}
				// disabledDates={[new Date(2021, 10, 10)]}
				// disableDate={disableDate}
				isValidDate={disableDate}
			/>
			<br />
			<DateRangePicker
				ranges={date}
				onChange={(item) => setDate([item.selection])}
				months={1}
				minDate={addDays(new Date(), 2)}
				maxDate={addDays(new Date(), 90)}
				direction="vertical"
				showSelectionPreview={true}
				moveRangeOnFirstSelection={false}
				scroll={{ enabled: true }}
				strictMode={true}
				editableDateInputs={true}
				rangeColors={["#ee7c19"]}
				// disabledDays={[0, 6]}
				// disabledDates={[new Date(2021, 10, 10)]}
				disabledDate={disableDate}
			/>
		</Styles>
	);
};

export default ChefCalendar;

// Round 1
// needs to take in the dates from when a bookins ia pproved
// --  then block those [dates and/or time slots]

// if a user selects dates HERE the dates will be passed into the
//  -- bookings calendar/page

// const ChefCalendar = ({ availability }) => {
// 	const [date, setDate] = useState([
// 		{
// 			startDate: new Date(),
// 			endDate: new Date(),
// 			key: "selection",
// 		},
// 	]);

// 	return (
// 		<DateRangePicker
// 			ranges={date}
// 			onChange={(item) => setDate([item.selection])}
// 			months={1}
// 			minDate={addDays(new Date(), 2)}
// 			maxDate={addDays(new Date(), 90)}
// 			direction="vertical"
// 			showSelectionPreview={true}
// 			moveRangeOnFirstSelection={false}
// 			scroll={{ enabled: true }}
// 			strictMode={true}
// 			editableDateInputs={true}
// 			rangeColors={["#ee7c19"]}
// 			disabledDays={[0,6]}
// 		/>
// 	);
// };
// export default ChefCalendar;

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

// conversion
// let today = new Date() today.toISOString().split('T')[0]
