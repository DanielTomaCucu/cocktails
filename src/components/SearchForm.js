import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, cocktails } = useGlobalContext();
  const searchValue = React.useRef("");
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const habndleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className=" section search">
      <form className="search-form" onSubmit={habndleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
        <h5> Results: {cocktails.length}</h5>
      </form>
    </section>
  );
};

export default SearchForm;
