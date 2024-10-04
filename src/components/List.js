import React from "react";

const List = ({ id, title, removeItem, editItem }) => {
  return (
    <div className="list-item">
      <p className="title">{title}</p>
      <div className="button-container">
        <button onClick={() => editItem(id)}>edit</button>
        <button onClick={() => removeItem(id)}>delete</button>
      </div>
    </div>
  );
};

export default List;
