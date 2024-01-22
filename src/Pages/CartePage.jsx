import { useContext } from "react";
import { RecipeContext } from "../context/recipes";
import Card from "../Components/Card";

function CartePage() {
  const { recipes } = useContext(RecipeContext);
  return (
    <main>
      <h2 className="text-danger">La carte</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {recipes.map((p) => (
          <Card key={p.id} pizza={p} />
        ))}
      </div>
    </main>
  );
}

export default CartePage;
