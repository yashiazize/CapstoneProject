import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

const Home = () => {
	return (
		<>
			<Hero>
				<Banner
					title="Chef Finder App Testing"
					subtitle="testing what the subitile looks like"
				/>
			</Hero>
		</>
	);
};

export default Home;
