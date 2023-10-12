import React from 'react';

const Todo = ({todo, todos, setTodos}) => {
    const ChangeToggle =(id)=>{
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
        }); 
        setTodos(updatedTodos)   
    };
     return (
        <li className='flex gap-2 text-xl'>
            <input 
            type="checkbox"
            checked ={todo.completed}
            onClick={()=>ChangeToggle(todo.id)}
            />
            <span className={` ${todo.completed ? 'line-through' : 'none'}`}>
              {todo.title}
            </span>
        </li>
    );
};

export default Todo;