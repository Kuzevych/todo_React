import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import TodoItem from './components/TodoItem';
import todosData from './todosData';
class App extends Component {
    sayHi = () =>{
        console.log('HI');
    };
    render() {
        this.sayHi();
    const todoItems = todosData.map(item=><TodoItem key={item.id} completed={item.completed} text={item.text}/>);
        return (
            <div className='todo-list'>
                {todoItems}
            </div>
        );
    }
}

App.propTypes = {};

export default App;
