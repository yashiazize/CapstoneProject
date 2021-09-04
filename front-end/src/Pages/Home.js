import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

const Home = () => {
	return (
		<>
			<Hero>
				<Banner
					title="Chef Finder App "
					subtitle="testing what the subtitle looks like"
				>
					<Link to={"/users/chefs"} className="btn-primary">
						our chefs
					</Link>
				</Banner>
			</Hero>
		</>
	);
};

export default Home;
