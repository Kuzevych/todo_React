import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import TodoItem from './components/TodoItem';
//import todosData from './todosData';


class App extends Component {
    constructor(){
        super()
        this.state = {
            todosData: [
                {
                    id: 1,
                    text: "Take out the trash",
                    completed: true
                },
                {
                    id: 2,
                    text: "Grocery shopping",
                    completed: true
                },
                {
                    id: 3,
                    text: "Clean gecko tank",
                    completed: false
                },
                {
                    id: 4,
                    text: "Mow lawn",
                    completed: true
                },
                {
                    id: 5,
                    text: "Catch up on Arrested Development",
                    completed: false
                },
                {
                    id: 6,
                    text: "Create todo list",
                    completed: true
                }
            ]
        }
    }

    render() {
        //console.log(this.state.todosData);
    //const todoItems = todosData.map(item=><TodoItem key={item.id} completed={item.completed} text={item.text}/>);
    const todoItems = this.state.todosData.map(item=><TodoItem key={item.id} completed={item.completed} text={item.text}/>);
        return (
            <div className='todo-list'>
                {todoItems}
            </div>
        );
    }
}

App.propTypes = {};

export default App;
