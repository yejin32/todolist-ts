import React, { useRef, useState } from 'react';
import Todo from './Todo';
import Input from './Input';

interface ListProps {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList = () => {
    const [inputText, setInputText] = useState('');
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
    const nextId = useRef(3);

    // Checkbox 이벤트 핸들러
    const handleClickCheckbox = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
            ));
    }

    // DeleteBtn 이벤트 핸들러
    const handleClickDeleteBtn = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // InputText 변경 이벤트 핸들러
    const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    // InputText 엔터 이벤트 핸들러
    const handleInputTextKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const newList: ListProps = {
                id: nextId.current,
                text: inputText,
                completed: false
            }
            setTodos(todos.concat(newList));
            setInputText('');
            nextId.current++;
        }
    }
    
    return (
        <div>
            <Input
            onChange={handleInputTextChange}
            onKeyDown={handleInputTextKeyDown}
            inputText={inputText}
            />
            {todos.map(todos => 
            <Todo id={todos.id} 
            text={todos.text} 
            completed={todos.completed} 
            key={todos.id} 
            onClickCheckbox={handleClickCheckbox} 
            onClickDeleteBtn={handleClickDeleteBtn}/>
            )}
        </div>
    );
};

export default TodoList;