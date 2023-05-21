import './App.css';
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([
    { name: "Buy shopping" },
    { name: "Clean bathroom" },
    { name: "Car's MOT" },
  ]); 

  const [todo, setTodo] = useState("")

  const [newTodo, setNewTodo] = useState("")

  const todoNodes = todoList.map((todo, index) => {
    return (
      <li key={index}>
        <span>{todo.name}</span>
        </li>
    )
  })

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value)
  }

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodoList = [...todoList]
    copyTodoList.push({name: newTodo})
    setTodoList(copyTodoList)
    setNewTodo("")
  }


  return (

    <div className="App">
      <h1>ToDo's</h1>
      <hr/>

      <ul>
        {todoNodes}
      </ul>

      <form onSubmit={saveNewTodo}>
        <label htmlFor="new-todo">Add Todo:</label>
        <input type="text" id="new-todo" value={newTodo} onChange={handleTodoInput} />
          <input type="submit" value="Save New Todo"/>
      </form>

      </div>

);
  }

export default App;