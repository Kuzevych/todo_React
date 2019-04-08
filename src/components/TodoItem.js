import React from 'react';

const TodoItem = (props) => {
    return (
        <div className='todo-item'>
            <label>
                <input type='checkbox' checked={props.completed}/>
                <span>{props.text}</span>
            </label>
        </div>
    );
};

export default TodoItem;
