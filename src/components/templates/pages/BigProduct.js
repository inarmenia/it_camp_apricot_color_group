import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/BigProduct.css';

export default class BigProductAd extends Component {
	render() {
		return (
			<div className='bigProduct'>
				<div className='main'>
					<div className='textOfTheBigProduct'>
						<h3>
							Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition
						</h3>
						<hr />
						<p>
							Even bad code can function. But if code isn’t clean, it can bring
							a development organization to its knees. Every year, countless
							hours and significant resources are lost because of poorly written
							code. But it doesn’t have to be that way. Noted software expert
							Robert C. Martin, presents a revolutionary paradigm with Clean
							Code: A Handbook of Agile Software Craftsmanship. Martin, who has
							helped bring agile principles from a practitioner’s point of view
							to tens of thousands of programmers, has teamed up with his
							colleagues from Object Mentor to distill their best agile practice
							of cleaning code “on the fly” into a book that will instill within
							you the values of software craftsman, and make you a better
							programmer―but only if you work at it. What kind of work will you
							be doing? You’ll be reading code―lots of code. And you will be
							challenged to think about what’s right about that code, and what’s
							wrong with it. More importantly you will be challenged to reassess
							your professional values and your commitment to your craft.
						</p>

						<div>
							<Link to='/discountGame'>
								<h2 className='hoverEffects'>Play</h2>
							</Link>
						</div>
					</div>
					<div className='imageOfTheBigProduct'>
						<img
							className='bigProductImage'
							src='https://miro.medium.com/max/1103/1*PKsDuPxNoKJyJvmlLc64qg.jpeg'
							alt='clean-code'
						/>
					</div>
				</div>
			</div>
		);
	}
}
