import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import "./index.css";

const Allparts = () => {
  const APP_ID = "91b9c6e4";
  const App_KEY = "5d5d68d8e68bfd216cb37b7e19c86175";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setquery] = useState("chicken");
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApi();
  }, [query]);

  const getApi = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${App_KEY}`
    );
    const data = await res.json();
    setRecipe(data.hits);

    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setquery(search);
    setSearch("");
  };

  return (
    <>
      <section className="Full_Part">
        <h1 className="header">
          Fresh Food <strong>Hut</strong>
        </h1>
        <form onSubmit={getQuery} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            search
          </button>
        </form>
        <div>
          {recipe.map((curItems) => (
            <SingleProduct
              key={curItems.recipe.label}
              calories={curItems.recipe.calories}
              img={curItems.recipe.image}
              name={curItems.recipe.label}
              weight={curItems.recipe.totalWeight}
              cuisineType={curItems.recipe.cuisineType}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Allparts;
