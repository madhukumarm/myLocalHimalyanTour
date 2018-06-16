import React from 'react';
import '../css/App.css';
import { Link } from 'react-router';

class SignUp extends React.Component {
	
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			password: '',
			confirm_password: '',
		}

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

		console.log("The form is submitted with below details");
		console.log(this.state);
	}
				

	render() {

		return (
			
			<div >
				<form onSubmit={this.handleSubmit} class="register-form">
					<input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
					<input type="text" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
					<input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
					<input type="password" placeholder="Confirm your Password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange}/>
					<button>Create Account</button>
					<p class="message">Already registered? <Link to="/login">Sign In</Link></p>
				</form>
			</div>
			)
	}
}

export default SignUp;