import React from "react";

const ChefAvailability = ({ chefAvail }) => {
	let value = [];

	for (const key in chefAvail) {
		if (!!chefAvail[key]) {
			value.push(`${key}: ${chefAvail[key]}, `);
		}
		// console.log(value);
		// console.log(
		// 	"filter",
		// 	value.filter((word) => word.includes("chef_id"))
		// );
		// console.log(
		// 	"inverse filter",
		// 	value.filter((word) => !word.includes("chef_id", "booked_by"))
		// );
	}
	let value2 = value.filter((word) => word !== "chef_id");
	let value3 = value2.filter((word) => word !== "booked_by");

	return <div>I am available : {value3}</div>;
};

export default ChefAvailability;
