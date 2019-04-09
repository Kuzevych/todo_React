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
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(id){
        this.setState(prevState =>{
            const newTodos = prevState.todos.map(todo=>{
                if(todo.id===id){
                    todo.completed = !todo.completed
                }
                return todo;
            })
            return {
                todos: newTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item=>
            <TodoItem
                key={item.id}
                item={item}
                changeStatus={this.handleChange}
            />);
        return (
                <div className='todo-list'>
                    {todoItems}
                </div>
            );
        }
}

App.propTypes = {};

export default App;
