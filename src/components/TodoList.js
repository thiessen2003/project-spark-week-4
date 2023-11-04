import React, {useState} from 'react';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';

function TodoList({todos, removeTodo, toggleComplete}) {
    return (
        <ul style={{ listStyle: 'none' }}>
            {todos.map(todo => (
                <Todo todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete}
                />
            ))}
        </ul>    )
}
export default TodoList; 