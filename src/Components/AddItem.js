import React from "react";
import "../Style/AddItem.css";

const AddItem = (props) => {
  const { searchedItem, handleAddItem } = props;

  return (
    <div className="list">
      <span>
        {searchedItem[0]?.name}
        <button
          className="btn"
          onClick={() => {
            handleAddItem(searchedItem);
          }}
        >
          Add
        </button>
      </span>
    </div>
  );
};

export default AddItem;
