import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import App from './app/App';
import { HashRouter } from "react-router-dom"



ReactDOM.render(
    <HashRouter >
        <App />
    </HashRouter >,
    document.getElementById('root'));


