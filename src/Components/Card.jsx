import { useContext } from "react";
import { RecipeContext } from "../context/recipes";

function Card({ pizza }) {
  const { addProduct } = useContext(RecipeContext);

  return (
    <div className="card m-1" style={{ width: "18rem" }}>
      <img src={pizza.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <ul>
          {pizza.ingredients.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <button
          onClick={() => addProduct(pizza)}
          type="button"
          className="btn btn-sm btn-outline-info"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default Card;
