import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

const FourOFour = () => {
	return (
		<Hero>
			<Banner title="404" subtitle="page not found">
				<Link to={"/"} className="btn-primary">
					return home
				</Link>
			</Banner>
		</Hero>
	);
};

export default FourOFour;
