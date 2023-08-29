import React ,{ useState } from 'react';
import './App.css';

function App() {

  // state hook - 'useState
  const[newItem, setNewItem] = useState("");
  const [items,setItems] = useState([]);

  //Helper add function

  function addItem() {

    if (!newItem){
      alert("Enter an item.")
      return;
    }
    
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }; 

    setItems(oldList => [...oldList, item]);
    setNewItem(""); 
  }

  function deleteItem(id){
    console.log(id);
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray)
  }
  return (
    <div className="App">
      {/* 1. header */}

      <h1>Todo List App</h1>

      {/* 2. input (input and button) */}
      <input type="text" 
        placeholder='Add item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      
      <button onClick={() => addItem()}>Add</button>

      {/* 3. List of items (unordered list with list items) */}

      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button className='delte-button' onClick={() => deleteItem(item.id)}>❌</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
