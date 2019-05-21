
import React, {Component} from 'react';

class Form extends Component {
    handleChange = (event)=>{
        console.log(event.target.value);
    }
    stopDefAction = (evt) =>{
        evt.preventDefault();
    }
    render() {
        return (
            <div>
                <form>
                    <input type='text' onChange={this.handleChange}/>
                    <button onClick={this.stopDefAction}>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;