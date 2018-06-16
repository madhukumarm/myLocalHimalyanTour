import React from 'react';
import '../css/App.css';
import { Link } from 'react-router';

class Login extends React.Component {

	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		let target = e.target;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		let name = target.name;

		this.setState({
			[name]: value
		});
		
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("The form was submitted with follwing data");
		console.log(this.state);
	}

	render() {
		return (
			<div class="login-page">
				<div class="form">
					<form onSubmit = {this.handleSubmit} class="login-form">
						<input type="text" placeholder="E-Mail Address" name="email" value={this.state.email} onChange={this.handleChange}/>
						<input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
						<button>login</button>
						<p class="message">Not registered? <Link to="signup">Create an account</Link></p>
					</form>
				</div>
			</div>
		)
	}
}

export default Login;