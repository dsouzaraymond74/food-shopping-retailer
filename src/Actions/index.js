export const addToCart = (product) => ({ type: 'ADDTOCART', product, });
export const removeFromCart = (product) => ({
	type: 'REMOVEFROMCART',
	product,
});

//product:product; when both property and value are same , we mention the name only once;