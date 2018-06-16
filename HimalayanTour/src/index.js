import React from "react";
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss, Route } from 'react-router';
import Login from './components/login';
import SignUp from './components/signup';
import HomePage from './components/homepage';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={HomePage} />
				<Match exactly pattern="/login" component={Login} />
				<Match exactly pattern="/signup" component={SignUp} />
			</div>
		</BrowserRouter>

	)
}

render(<Root/>, document.querySelector('#main'));



