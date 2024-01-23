import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const redirect = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [topThree, setTopThree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topThreeEasy, setTopThreeEasy] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (pizza) => {
    setCart([...cart, pizza]);
  };

  const removeProduct = (pizza) => {
    setCart(cart.filter((p) => p.id !== pizza.id));
  };

  const resetCart = () => {
    setCart([]);
  };

  const order = (e) => {
    e.preventDefault();
    const address = e.target.address.value.trim();
    if (address) {
      window.alert("Votre commande est en préparation");
      redirect("/Home");
      resetCart();
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  useEffect(() => {
    const allData = [...recipes];
    allData.sort((a, b) => {
      if (a.rating > b.rating) return -1;
      if (a.rating < a.rating) return 1;
      return 0;
    });
    setTopThree(allData.slice(0, 3));
    if (topThree.length == 3) {
      setLoading(false);
    }
  }, [recipes]);

  useEffect(() => {
    const allData = [...recipes].filter((r) => r.difficulty == "Easy");
    setTopThreeEasy(allData.slice(0, 3));
  }, [recipes]);

  return (
    <RecipeContext.Provider
      value={{
        topThree,
        loading,
        topThreeEasy,
        recipes,
        cart,
        addProduct,
        removeProduct,
        resetCart,
        order,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
