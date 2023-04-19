import React, { useState } from "react";
import axios from "axios";
import AddItem from "./AddItem";
import "../Style/Search.css";

const Search = (props) => {
  const { handleAddItem, handleOrderPicked } = props;
  const [input, setInput] = useState("");
  const [searchedItem, setSearchedItem] = useState([]);
  const [showSearchedItem, setShowSearchedItem] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3085/api/menuItems/${input}`)
      .then((res) => {
        setSearchedItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowSearchedItem(true);
  };

  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search item"
            value={input}
            onChange={handleInput}
          />
          <input className="searchSubmit" type="submit" value="search" />
        </div>
      </form>
      {showSearchedItem && (
        <AddItem
          searchedItem={searchedItem}
          handleAddItem={handleAddItem}
          handleOrderPicked={handleOrderPicked}
        />
      )}
    </div>
  );
};

export default Search;
