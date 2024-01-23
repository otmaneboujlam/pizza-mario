import Carousel from "../Components/Carousel";
import { useContext } from "react";
import { RecipeContext } from "../context/recipes";
import Card from "../Components/Card";

function HomePage() {
  const { topThreeEasy } = useContext(RecipeContext);

  return (
    <main>
      <h2 className="text-danger">Les mieux notées</h2>
      <Carousel />
      <h2 className="text-danger">Les plus faciles</h2>
      <div className="d-flex justify-content-center">
        {topThreeEasy.map((p) => (
          <Card key={p.id} pizza={p} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
