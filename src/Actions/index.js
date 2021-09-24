export const addToCart = (product) => ({ type: 'ADDTOCART', product });
export const removeFromCart = (product) => ({
	type: 'REMOVEFROMCART',
	product,
});
