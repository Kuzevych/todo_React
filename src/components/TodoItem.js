import React from 'react';

const TodoItem =(props) => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className='todo-item'>
            <label>
                <input onChange={()=>props.changeStatus(props.item.id)}
                       type='checkbox'
                       checked={props.item.completed}/>
                <span style={props.item.completed? completedStyle: null}>{props.item.text}</span>
            </label>
        </div>
    )
};

export default TodoItem;
