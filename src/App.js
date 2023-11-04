import TextEntry from './components/TodoList';
import React, {useState} from 'react';
import TodoForm from './components/TodoForm.js';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([todos, ...todos])
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id)
         setTodos(newTodos)
      }
    

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }


  return (
    <div className="App"> 
      <header className="App-header"/>
        <p>React To-do</p>
        <TodoForm addTodo = {addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
    </div>
  );
}

export default App;
