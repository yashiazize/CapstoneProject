import { Link } from "react-router-dom";

const ChefListItem = ({ chef }) => {
  return (
	  <div className="card mb-3" style={{width: "80vw"}}>
	    <div className="row g-0">
	      <div className="col-md-4">
	        <img src="..." class="img-fluid rounded-start" alt="..." />
	      </div>
	      <div className="col-md-8">
	        <div className="card-body">
	          <h5 className="card-title"><Link to={`/users/chefs/${chef.id}`}>{chef.name}</Link></h5>
	          <p className="card-text">
	            This is a wider card with supporting text below as a natural
	            lead-in to additional content. This content is a little bit
	            longer.
	          </p>
	          <p className="card-text">
	  		Cuisine(s): {chef.cuisine}
	          </p>
	        </div>
	      </div>
	    </div>
	  </div>
	  );
	};
	
	export default ChefListItem;
	
	