import React from 'react';
import '../css/App.css';
import '../css/index.css';
import { BrowserRouter, Match, Miss, Route, Link } from 'react-router';
import Login from './login';
import SignUp from './signup';

class HomePage extends React.Component {
	render() {
		return (
				<div>
					<Link to = "/login"> <button type="submit"> Sign in </button> </Link>    <br/>   <br/>
					<Link to = "/signup"> <button type="submit">Sign Up </button> </Link>
				</div>
			)
	}
}

export default HomePage;