import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import TodoItem from './components/TodoItem';
import todosData from "./todosData";
//import todosData from './todosData';


class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        //console.log(this.state.todosData);
    //const todoItems = todosData.map(item=><TodoItem key={item.id} completed={item.completed} text={item.text}/>);
    const todoItems = this.state.todos.map(item=><TodoItem key={item.id} completed={item.completed} text={item.text}/>);
        return (
            <div className='todo-list'>
                {todoItems}
            </div>
        );
    }
}

App.propTypes = {};

export default App;
