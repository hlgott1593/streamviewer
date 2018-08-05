import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

window.getToken = function(properties) {
    ReactDOM.render((
		<BrowserRouter>
		<App token={properties.token}/>
		</BrowserRouter>
	), document.getElementById('root'));
}
