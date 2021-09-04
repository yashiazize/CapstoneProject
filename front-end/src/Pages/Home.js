import { Link } from "react-router-dom";
import Hero from "../Components/Hero";

const Home = () => {
	return (
		<>
			<Hero> </Hero>
			<div>
				<h1>Chef Finder App</h1>
				<Link to={`/users/new`}>New User</Link>
			</div>
		</>
	);
};

export default Home;
