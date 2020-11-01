//import the react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';


//create a react component
const App = () => {

    const buttonText = {text:'Click me!'};
    const labelText = 'Enter name:';

    // function getButtonText(){
    //     return 'Click on me'
    // }

    return (
    <div>
        <label class="label" htmlFor="name">{labelText}</label>
        <input id="name" type="text" />
        <button style={{ backgroundColor:'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
    );
};

//take a react component  and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));