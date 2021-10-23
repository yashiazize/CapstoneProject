import Title from "./Title";
import { FaGlassCheers, FaHamburger, FaCocktail, FaSuitcase } from "react-icons/fa";

const Services = () => {
	const services = [
		{
			icon: <FaGlassCheers />,
			title: "special events",
			info: "Hire a personal chef to make important occasions like Valentine's Day or Mother's Day more memorable.",
		},
		{
			icon: <FaHamburger />,
			title: "meal prep",
			info: "Use Savor services to breathe new life into your weekly meals when you're too busy or disinterested of cooking the same meals.",
		},
		{
			icon: <FaCocktail />,
			title: "parties",
			info: "Instead of the usual party fare, let Savor Chefs create a one-of-a-kind menu for you and your guests that they will remember forever.",
		},
		{
			icon: <FaSuitcase />,
			title: "business events",
			info: "By having a personal chef develop a meal for your next corporate event, you may introduce your coworkers to new flavors.",
		},
	];

	const prices = [
		{
			title: "Comfort",
			price: "$15",
			info: "Includes: ..."
		},
		{
			title: "Casual",
			price: "$30",
			info: "Includes: ..."
		},
		{
			title: "Fine",
			price: "$70",
			info: "Certified Chef, 5 Star meal experiences, Menu Creation"
		}
	]

	return (
		<section className="services">
			<Title title="services" />
			<div className="services-center">
				{services.map((service, index) => {
					return (
						<article key={index} className="service">
							<span>{service.icon}</span>
							<h6>{service.title}</h6>
							<p>{service.info}</p>
						</article>
					);
				})}
			</div>
			<Title title="Pricing" />
			<div className="services-center">
			{prices.map((price, index) => {
					return (
						<article key={index} className="service">
							<h6>{price.title}</h6>
							<p>{price.price} per person</p>
							<p>{price.info}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
