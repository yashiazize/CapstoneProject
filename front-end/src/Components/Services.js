import Title from "./Title";
import { FaGlassCheers, FaHamburger, FaCocktail, FaJava } from "react-icons/fa";

const Services = () => {
	const services = [
		{
			icon: <FaGlassCheers />,
			title: "special events",
			info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vitae architecto unde harum repellat quia.",
		},
		{
			icon: <FaHamburger />,
			title: "meal prep",
			info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vitae architecto unde harum repellat quia.",
		},
		{
			icon: <FaCocktail />,
			title: "parties",
			info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vitae architecto unde harum repellat quia.",
		},
		{
			icon: <FaJava />,
			title: "business events",
			info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vitae architecto unde harum repellat quia.",
		},
	];

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
		</section>
	);
};

export default Services;
