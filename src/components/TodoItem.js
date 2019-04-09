import React from 'react';


const TodoItem =(props) => {
    return (
        <div className='todo-item'>
            <label>
                <input onChange={()=>props.changeStatus(props.item.id)}
                       type='checkbox'
                       checked={props.item.completed}/>
                <span>{props.item.text}</span>
            </label>
        </div>
    )
};

export default TodoItem;
