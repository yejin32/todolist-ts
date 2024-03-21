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
    
    return (
        <div>
            {todos.map(todos => 
            <Todo onClickCheckbox={handleClickCheckbox} id={todos.id} text={todos.text} completed={todos.completed} key={todos.id}/>
            )}
        </div>
    );
};

export default TodoList;