const Hero = ({ children, hero }) => {
	return <header className={hero}>{children}</header>;
};

// if no hero class is specified will default
Hero.defaultProps = {
	hero: "defaultHero",
};

export default Hero;

// kinfe on the left: Photo by <a href="https://unsplash.com/@goumbik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lukas Blazek</a> on <a href="https://unsplash.com/s/photos/backgrounds-and-textures%2C-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// salmon plate Photo by <a href="https://unsplash.com/@simplethemes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Casey Lee</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// beach view Photo by <a href="https://unsplash.com/@picturesbyalbert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Albert</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
