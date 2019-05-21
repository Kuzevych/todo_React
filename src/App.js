import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import todosData from "./todosData";
import Form from './components/Form';


class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        };
        // this.handleChange=this.handleChange.bind(this);
    }

    handleChange = (id) => {
        this.setState(prevState =>{
            const updateTodos = prevState.todos.map(todo=>{
                if(todo.id===id){
                    todo.completed = !todo.completed
                }
                return todo;
            });
            return {
                todos: updateTodos
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
                    <Form />
                    {todoItems}
                </div>
            );
        }
}

App.propTypes = {};

export default App;
