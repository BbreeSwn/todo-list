import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

const List = ({ id, title, removeItem, editItem }) => {
  return (
    <div className="list-item">
      <p className="title">{title}</p>
      <div className="button-container">
        <button onClick={() => editItem(id)}><FaEdit /></button>
        <button onClick={() => removeItem(id)}><MdOutlineDeleteForever /></button>
      </div>
    </div>
  );
};

export default List;
