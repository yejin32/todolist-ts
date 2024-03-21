import React, { useState } from 'react';
import Todo from './Todo';



const TodoList = () => {
    const [todos] = useState([
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
    
    return (
        <div>
            {todos.map(todos => 
            <Todo text={todos.text} completed={todos.completed} key={todos.id}/>
            )}
        </div>
    );
};

export default TodoList;