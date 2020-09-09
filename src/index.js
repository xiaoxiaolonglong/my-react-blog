import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './asset/css/bootstrap.min.css';
import './asset/css/font-awesome.min.css';
import './asset/css/style.css';
import './asset/css/raxus.css';
import './asset/css/os.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import api from "./utils/api";
 
React.Component.prototype.api = api;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();