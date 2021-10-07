import ChefDetails from "../Components/ChefDetails";

const Show = ({ chefs, starRatings }) => {
  return (
    <section>
      <ChefDetails chefs={chefs} starRatings={starRatings}/>
    </section>
  );
};

export default Show;
