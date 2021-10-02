import ChefsList from "../Components/ChefsList";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

const Index = ({ chefs }) => {
  return (
    <>
      <Hero hero="chefsHero">
        <Banner title="our chefs"></Banner>
      </Hero>
      <div>
        <ul>
          <ChefsList chefs={chefs} />
        </ul>
      </div>
    </>
  );
};

export default Index;
