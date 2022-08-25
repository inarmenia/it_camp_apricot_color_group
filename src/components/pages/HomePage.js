import React from 'react';

import '../styles/HomePage.css';
import BigProduct from '../templates/pages/BigProduct';
import { Product } from '../templates/pages/Product';

const HomePage = (props) => {
	const books = props.bookList.map((book) => {
		return (
			<Product
				key={book.key}
				name={book.name}
				description={book.description}
				image={book.image}
				downloadLink={book.downloadLink}
			/>
		);
	});

	return (
		<div className='body'>
			<h3 className='introduction'>Feautured</h3>
			<h3 className='introduction'>Play and get for free.</h3>
			<BigProduct />
			<div className='separator'>
				<h3 className='introduction'>Download now for free</h3>
				<div className='books'>{books}</div>
			</div>
		</div>
	);
};

export default HomePage;
