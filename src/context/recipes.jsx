import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [topThree, setTopThree] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <RecipeContext.Provider value={{ topThree, loading }}>
      {children}
    </RecipeContext.Provider>
  );
};
