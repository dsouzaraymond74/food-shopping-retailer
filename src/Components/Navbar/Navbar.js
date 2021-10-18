import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
	return (
		<header className="block row center">
			<div>
				<Link to="/">
					<h1 className=" my-2 text-2xl">
						GROCERY SHOPPING CART
					</h1>
					<div className="links">
						<Link to="/">HOME</Link>
						<Link to="/">PRODUCTS</Link>
						<Link to="/contact">CONTACT</Link>
						<Link to="/inquiry">INQUIRY</Link>
					</div>
				</Link>
			</div>
			<div>
				<Link to="/">
					Cart{' '}
					{props.countCartItems ? (
						<button className="badge">
							{props.countCartItems}
						</button>
					) : (
						''
					)}
				</Link>
				<Link to="/"> SignUp</Link>
			</div>
		</header>
	);
};
export default Navbar;
