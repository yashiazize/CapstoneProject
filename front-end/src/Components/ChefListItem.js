import { Link } from "react-router-dom";
// import RatingItem from "./RatingItem";

const ChefListItem = ({ chef, starRatings }) => {
  return (
    <div className="card mb-3 chefs-list-card">
      <div className="row g-0">
        <div className="img-container">
          {/* col-md-4 */}
          <img
            src={chef.img_url}
            className="img-fluid rounded-start "
            alt="img_url"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/chefs/${chef.id}`}>
                {chef.first_name} {chef.last_name}
              </Link>
            </h5>
            <p className="card-text"></p>
            <p className="card-text">Cuisine(s): {chef.cuisine}</p>
			<div>
			{starRatings.map((starRating) => {
                return (
                  <li key={starRating.id}>
                    <h6>Rating: {starRating.rating}</h6>)
                  </li>
                );
              })}	
						</div>
            {/* <RatingItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefListItem;
