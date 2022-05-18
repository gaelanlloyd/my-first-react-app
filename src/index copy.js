// To make your first component, you need:
//
// 1. Import react
// 2. A function
//

// This is an ES6 module that will be imported for use
import React from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// React module function names must be capitalized
// This is a stateless functional component
// They must always return JSX, even if it's empty HTML

// OPTION ONE

function Greeting() {

  // return <pre>Hello, world!</pre>

  // You can't just return an H1 and PRE, they have to be contained w/in a DIV
  // ...because you MUST only return a SINGLE ELEMENT.
  return (

    <div className='myClass'>

      <h1>My first react app</h1>
      <p>Hello, world!</p>

      {/* Include the shopping list component as a nested component */}
      <ShoppingList />
      
    </div>

  );
}

// OPTION TWO

/*
const Greeting = () => {
  return React.createElement('pre', {}, 'Hellloooo world!');
}
*/

function ShoppingList() {
  return (

    <div className='shoppingList'>

      <h2>Shopping list:</h2>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
    </div>

  )
}



// Get the root DOM element that will be used to store the entire interface
const root = ReactDOM.createRoot(document.getElementById('root'));


// Component must be either a:
// 1. Closed, matched tag (<Greeting></Greeting>)
// 2. A self-closing tag (<Greeting/>)

root.render(
  <Greeting/>
);


/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
