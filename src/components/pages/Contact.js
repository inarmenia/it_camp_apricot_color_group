import React, { Component } from 'react';
import '../styles/Contact.css';
export default class Contact extends Component {
	render() {
		return (
			<div className='centreText'>
				<h3>Contact us</h3>
				<form id='contact-form'>
					<div className='form-group'>
						<label htmlFor='name'>Name</label>
						<input type='text' className='form-control' required={'true'} />
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputEmail1'>Email address</label>
						<input
							type='email'
							className='form-control'
							aria-describedby='emailHelp'
							required={'true'}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message</label>
						<textarea
							className='form-control'
							rows='5'
							required={'true'}></textarea>
					</div>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		);
	}

	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onMessageChange(event) {
		this.setState({ message: event.target.value });
	}

	handleSubmit(event) {}
}
