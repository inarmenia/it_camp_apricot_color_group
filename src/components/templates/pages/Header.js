import React, { Component } from 'react';

import '../styles/Header.css';
import Logo from '../../../assets/images/ITBooK_Dark_Mode.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<header id='header'>
				<div className='itBookLogo'>
					<Link to='/'>
						<img className='itBookLogo' src={Logo} alt='logo' />
					</Link>
				</div>
				<div className='navBarButtons'>
					<div className='navBarButton'>
						<Link to='/discountGame'>
							<p>Sudoku</p>
						</Link>
					</div>
					<div className='navBarButton'>
						<Link to='/about'>
							<p>About</p>
						</Link>
					</div>
					<div className='navBarButton'>
						<Link to='/contact'>
							<p>Contact</p>
						</Link>
					</div>
				</div>
			</header>
		);
	}
}
