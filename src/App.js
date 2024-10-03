import './App.css';

function App() {
  return (
    <section className="container">
      <h1>Todo List</h1>
      <form className='form-group'>
        <div className='form-control'>
        <input type="text" className='text-input' />
        <button type='submit' className='submit-btn'>add list</button>

        </div>
      </form>
    </section>
  );
}

export default App;
