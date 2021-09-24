import React from 'react';
import { addToCart } from '../Actions';

const Product = (props) => {
	const { product, dispatch } = props;

	return (
		<div>
			<img className="small" src={product.image} alt={product.name} />
			<h3 className="mx-0 my-2 text-base">{product.name}</h3>
			<div>£{product.price}</div>
			<div>
				<button onClick={() => dispatch(addToCart(product))}>
					Add To Cart
				</button>
			</div>
		</div>
	);
};
export default Product;
