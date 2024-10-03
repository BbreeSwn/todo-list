import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const submitData = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      title: name,
    };
    setList([...list, newItem]);
    setName("");
  };

  return (
    <section className="container">
      <h1>Todo List</h1>
      {alert.show && <Alert />}
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit" className="submit-btn">
            add list
          </button>
        </div>
      </form>
      <section className="list-component">
        {list.map((data, index) => {
          return <List key={index} {...data} />;
        })}
      </section>
    </section>
  );
}

export default App;
