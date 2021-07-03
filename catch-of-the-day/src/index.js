import React from 'react';
import {render} from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import "./css/style.css";

render(<App />, document.querySelector('#main'));

/*
Primarly , There are two ways to add css inside the React App 
1.Import the CSS inside the Index.html 
2.Importing CSS respective to the Component inside the JS file for that component 


As of now , we will be importing CSS inside the index.js file which will be applied to complete react Project . 
*/