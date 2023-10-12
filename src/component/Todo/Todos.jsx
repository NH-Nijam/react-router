import React, { useEffect, useState } from 'react';
import Todo from './Todo';

const Todos = () => {
    const [todos, setTodos] =useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data.slice(0, 10)))
    },[])
    return (
        <div className='h-screen'>
            <div className='border w-3/6 p-10 mx-auto mt-5 shadow-xl'>
                <h2 className='text-4xl underline text-center mb-7'>To-Do List</h2>
                <ul className='flex flex-col gap-2'>
                    {
                        todos.map(todo =><Todo
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        ></Todo>)
                    }
                </ul>
            </div>
            
            
        </div>
    );
};

export default Todos;