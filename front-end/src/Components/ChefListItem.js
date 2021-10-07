import { Link } from "react-router-dom";

const ChefListItem = ({ chef, ratingAverage }) => {
  const averageScore = [];
  for (let prop in ratingAverage) {
    if (chef.id === ratingAverage[prop].id) {
      averageScore.push(ratingAverage[prop].average_rating);
    }
  }

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
            <p className="card-text">Rating: {averageScore}/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefListItem;
