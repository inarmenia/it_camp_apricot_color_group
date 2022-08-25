import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/templates/pages/Header';
import HomePage from './components/pages/HomePage';
import DiscountGame from './components/pages/DiscountGame';
import { About } from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/templates/pages/Footer';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bookList: [
				{
					key: 0,
					name: 'Black Hat Python. Python Programming for Hackers and Pentesters',
					description:
						'Black Hat Python. Python Programming for Hackers and Pentesters',
					image:
						'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-J2nTHJyVDws%2FYBQOHGYPIUI%2FAAAAAAAAJ1E%2FoIayJwYAwWYf1v2e2Gj7ho55YkzA0R_QQCLcBGAsYHQ%2Fs1500%2FA1%25252B3VAjQftL._AC_SL1500_.jpg&f=1&nofb=1',
					downloadLink:
						'./assets/pdfs/Black_Hat_Python_Python_Programming_for_Hackers_and_Pentesters.pdf',
				},
				{
					key: 1,
					name: 'Base C++ with Ruben Vardanyan',
					description: 'Language: Armenian',
					image: './assets/images/Base_C++.png',
					downloadLink: './assets/pdfs/c++.pdf',
				},
				{
					key: 2,
					name: 'JavaScript full course',
					description: "You'll learn everything about JavaScript in this book.",
					image: './assets/images/JS_Full.png',
					downloadLink: './assets/pdfs/JS.pdf',
				},
			],
			error: null,
		};
	}

	render() {
		return (
			<Router basename='/'>
				<Header />
				<Routes>
					<Route
						exact
						path='/'
						element={<HomePage bookList={this.state.bookList} />}
					/>
					<Route exact path='/discountGame' element={<DiscountGame />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/contact' element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		);
	}
}
