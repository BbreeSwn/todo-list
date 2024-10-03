import './App.css';
import {useState} from 'react'

function App() {
  const [name , setName] = useState('')

const submitData = (e) => {
e.preventDefault()
console.log("data =" ,name);
}

  return (
    <section className="container">
      <h1>Todo List</h1>
      <form className='form-group' onSubmit={submitData} >
        <div className='form-control'>
        <input type="text" className='text-input' onChange={(e)=>setName(e.target.value)}
        value={name}
        />
        <button type='submit' className='submit-btn'>add list</button>

        </div>
      </form>
    </section>
  );
}

export default App;
