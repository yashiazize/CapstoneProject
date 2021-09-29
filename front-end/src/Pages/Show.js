import ChefDetails from "../Components/ChefDetails";

const Show = ({ chefs }) => {
  return (
    <section>
      <ChefDetails chefs={chefs} />
    </section>
  );
};

export default Show;
