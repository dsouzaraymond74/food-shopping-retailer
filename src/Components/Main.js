import React from 'react';
import { useDispatch } from 'react-redux';
import Product from './Product';

const Main = (props) => {
	const dispatch = useDispatch();
	const { products } = props;
	return (
		<main className="block col-2">
			<h2 className="mx-0 my-2 text-lg">Products</h2>
			<div className="row">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						dispatch={dispatch}
					></Product>
				))}
			</div>
		</main>
	);
};
export default Main;
