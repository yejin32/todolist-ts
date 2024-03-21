import React, { useState } from 'react';
import Todo from './Todo';



const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'todo1',
            completed: false,
        },
        {
            id: 2,
            text: 'todo2',
            completed: true,
        }
    ]);

    const handleClickCheckbox = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
            ));
    }
    const handleClickDeleteBtn = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    
    return (
        <div>
            {todos.map(todos => 
            <Todo id={todos.id} text={todos.text} completed={todos.completed} key={todos.id} onClickCheckbox={handleClickCheckbox} onClickDeleteBtn={handleClickDeleteBtn}/>
            )}
        </div>
    );
};

export default TodoList;