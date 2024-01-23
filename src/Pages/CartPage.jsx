import { useContext } from "react";
import { RecipeContext } from "../context/recipes";

function CartPage() {
  const { cart, removeProduct, resetCart, order } = useContext(RecipeContext);

  return (
    <main>
      <h2 className="text-danger">Votre Panier</h2>
      <button
        onClick={resetCart}
        type="button"
        className="mx-2 btn btn-sm btn-warning"
      >
        Vider le panier
      </button>
      <ul>
        {cart.map((p) => (
          <li className="p-2 text-white" key={crypto.randomUUID()}>
            {p.name} -{" "}
            <button
              onClick={() => removeProduct(p)}
              type="button"
              className="btn btn-sm btn-warning"
            >
              supprimer
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={order}>
        <div className="form-group m-1 p-1">
          <label htmlFor="address" className="text-white">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            aria-describedby="addressHelp"
            placeholder="Enter address"
            autoComplete="on"
          />
        </div>
        <button type="submit" className="m-2 btn btn-sm btn-success">
          Commander
        </button>
      </form>
    </main>
  );
}

export default CartPage;
