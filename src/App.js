import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from './todosData';
const App =()=> {
    console.log(todosData);
    const todoItems = todosData.map(item=><TodoItem key={item.id} completed={item.completed} text={item.text}/>)
    return <div className='todo-list'>
        {todoItems}
    </div>;
}

export default App;
