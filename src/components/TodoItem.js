import React from 'react';

const TodoItem =(props) => {
    let textDecorator;
    if (props.item.completed){
        textDecorator='line-through'
    } else {
        textDecorator='none'
    }
    return (
        <div className='todo-item'>
            <label>
                <input onChange={()=>props.changeStatus(props.item.id)}
                       type='checkbox'
                       checked={props.item.completed}/>
                <span style={{textDecoration:textDecorator}}>{props.item.text}</span>
            </label>
        </div>
    )
};

export default TodoItem;
