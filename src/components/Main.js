import React from 'react';

const Main = (props) => {
    return (
        <div>
            <label>
                <input type='checkbox'/><span>{props.name}</span>
            </label>
            <label>
                <input type='checkbox'/><span>{props.surname}</span>
            </label>
            <label>
                <input type='checkbox'/><span>{props.fath}</span>
            </label>
        </div>
    );
};

export default Main;

