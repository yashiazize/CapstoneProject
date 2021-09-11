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
	          <h5 className="card-title">{chef.name}</h5>
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
	
	// 	  <div>
	// 	  <div>
	//   	<Link to={`/users/chefs/${chef.id}`}>
	//   		<h4>image of chef here</h4>
	//   	</Link>
	//   </div>
	//   <div>
	//   	<h3>{chef.name}</h3>
	//   	<p>Cuisine(s): {chef.cuisine}</p>
	//   </div>
	//   </div>