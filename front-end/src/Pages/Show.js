import ChefDetails from "../Components/ChefDetails";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

const Show = ({ chefs }) => {
	return (
		<>
			{/* change the className and image in the css */}
			<Hero hero="chefsHero">
				<Banner title="chef">
					<Link to={"/users/chefs"} className="btn-primary">
						back to chefs
					</Link>
				</Banner>
			</Hero>
			<section className="single-chef">
				<ChefDetails chefs={chefs} />
			</section>
		</>
	);
};

export default Show;
