import React from 'react';

import '../styles/DiscountGame.css';

export default function DiscountGame(id) {
	return (
		<div className='gameBody'>
			<h1>Sudoku</h1>
			<iframe
				title='Sudoku'
				width='150%'
				src='https://taron2005.github.io/Sudoku-Main/'
			/>
		</div>
	);
}
