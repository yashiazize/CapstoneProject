import React from "react";

const ChefAvailability = ({ chefAvail }) => {
	let value = [];
	let schedule = [];

	for (const key in chefAvail) {
		if (!!chefAvail[key]) {
			value.push(`${key}: ${chefAvail[key]}, `);
		}
	}
	schedule = value.splice(2, value.length - 3);

	return (
		<div>
			<div>I am available: {schedule}</div>
		</div>
	);
};

export default ChefAvailability;
