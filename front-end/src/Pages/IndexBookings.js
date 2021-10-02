import React from "react";
import AddReview from "../Components/AddReview";
import Requests from "../Components/Requests";

const IndexBookings = () => {
  return (
    <div>
      List of your bookings
      <Requests />
      <AddReview />
    </div>
  );
};

export default IndexBookings;
