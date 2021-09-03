import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div>
			<h1>Chef Finder App</h1>
			<Link to={`/users/new`}>New User</Link>
		</div>
	);
};

export default Home;
