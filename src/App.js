import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  //add
  const submitData = (e) => {
    e.preventDefault();
    if (!name) {
      //show alert
      setAlert({
        show: true,
        msg: "pleast enter your detail🤓",
        type: "error",
      });
    } else if (isEdit && name) {
      // update Data
      const result = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(result);
      setName('')
      setIsEdit(false)
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
      setAlert({ show: true, msg: "Completed 🤓", type: "success" });
    }
  };

  //delete
  const removeItem = (id) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
    setAlert({ show: true, msg: "Deleted!! 👌🏻", type: "success" });
  };

  //edit
  const editItem = (id) => {
    setIsEdit(true);
    setEditId(id);
    const searchItem = list.find((item) => item.id === id);
    setName(searchItem.title);
  };

  return (
    <section className="container">
      <h1>Todo List</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list} />}
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "update" : "add job"}
          </button>
        </div>
      </form>
      <section className="list-component">
        {list.map((data, index) => {
          return (
            <List
              key={index}
              {...data}
              removeItem={removeItem}
              editItem={editItem}
            />
          );
        })}
      </section>
    </section>
  );
}

export default App;
