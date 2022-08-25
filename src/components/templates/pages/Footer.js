import React, { Component } from 'react';
import '../styles/Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<div id='footer'>
				<h4>
					<a href='https://github.com/namra004' target={'_blank'}>
						<span role='img' aria-label='Hearts Suit'>
							Created with ♥️ by Arman Nikoyan &nbsp;
						</span>
					</a>
				</h4>
				<p>/</p>
				<h4>
					<a href='https://github.com/Taron2005' target={'_blank'}>
						<span>&nbsp; designed by Taron Babayan</span>
					</a>
				</h4>
			</div>
		);
	}
}
