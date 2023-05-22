import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([
    { name: "Buy shopping ", priority: "high" },
    { name: "Clean bathroom ", priority: "high" },
    { name: "Car's MOT ", priority: "high" },
    { name: "Watch the rest of Succession ", priority: "low" }
  ]);

  const [newTodo, setNewTodo] = useState("");

  const [newTodoPriority, setNewTodoPriority] = useState("low");


  const todoNodes = todoList.map((todo, index) => {
    return (
      <li key={index} className={`Todo ${todo.priority === "high" ? "High" : "Low"}`}>
        <span>{todo.name}</span>
        {todo.priority === "high" ? (
          <span>
            <span className="High">High</span>
            <button className="RevertButton" onClick={() => revertPriority(index)}>Not So High?</button>
          </span>
        ) : (
          <button className="Low" onClick={() => prioritizeTodo(index)}>Low</button>
        )}
        <button className="Delete" onClick={() => deleteTodo(index)}>Delete</button>
      </li>
    );
  });
  
  const revertPriority = (index) => {
    const copyTodoList = [...todoList];
    copyTodoList[index].priority = "low";
    setTodoList(copyTodoList);
  };
  


const prioritizeTodo = (index) => {
  // console.log("Index:", index);

  const copyTodoList = [...todoList];
  // console.log("Copied Todo List:", copyTodoList);

  const updatedTodoList = { ...copyTodoList[index] };
  // console.log("Updated Todo List Object:", updatedTodoList);
  updatedTodoList.priority = "high";
  // console.log("Modified Todo List Object:", updatedTodoList);
  copyTodoList[index] = updatedTodoList;
  // console.log("Modified Copy Todo List:", copyTodoList);

  setTodoList(copyTodoList);
  // console.log("Updated Todo List:", todoList);
};

const deleteTodo = (index) => {
  const copyTodoList = [...todoList];
  copyTodoList.splice(index, 1);
  setTodoList(copyTodoList);
};


  const handleTodoInput = (event) => {
    // console.log(event.target.value)
    setNewTodo(event.target.value);
  };

  const handlePriorityChange = (event) => {
    // console.log(event.target.value)
    setNewTodoPriority(event.target.value);
  };

  const saveNewTodo = (event) => {
    event.preventDefault();
    // console.log("Current todo list:", todoList);
    const copyTodoList = [...todoList];
    // console.log("Copied todo list:", copyTodoList);
    const newTodoItem = { name: newTodo, priority: newTodoPriority };
    // console.log("New todo item:", newTodoItem);
    copyTodoList.push(newTodoItem);
    // console.log("Modified todo list:", copyTodoList);
    setTodoList(copyTodoList);
    // console.log("Updated todo list:", todoList);
    setNewTodo("");
    // console.log("Cleared new todo:", newTodo);
  };


  return (
    <div className="App">
      <h1>ToDo's</h1>
      <hr />
      
      <form onSubmit={saveNewTodo}>
        <label htmlFor="new-todo"></label>
        <input type="text" id="new-todo" value={newTodo} onChange={handleTodoInput} required />

      <div>
          <input type="radio" id="priority-low" name="priority" value="low" checked={newTodoPriority === "low"} onChange={handlePriorityChange} />
          <label htmlFor="priority-low">Low</label>
          <input type="radio" id="priority-high" name="priority" value="high" checked={newTodoPriority === "high"} onChange={handlePriorityChange} />
          <label htmlFor="priority-high">High</label>
        </div>

        <input type="submit" value="Save Item" />
      </form>

      <ul>{todoNodes}</ul>
    </div>
  );
}

export default App;
