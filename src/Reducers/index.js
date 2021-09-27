const reducer = (cartItems = [], action) => {
	switch (action.type) {
		case 'ADDTOCART': {
			const exist = cartItems.find(
				(item) => item.id === action.product.id
			);
			if (exist) {
				return cartItems.map((item) =>
					item.id === action.product.id
						? { ...exist, qty: exist.qty + 1 }
						: item
				);
			} else {
				return [...cartItems, { ...action.product, qty: 1 }];
			}
		}
		case 'REMOVEFROMCART': {
			const exist = cartItems.find((item) => item.id === action.product.id);
			if (exist.qty === 1) {
				return cartItems.filter((item) => 
				item.id !== action.product.id
				);
			} else {
				return cartItems.map((item) =>
					item.id === action.product.id
						? { ...exist, qty: exist.qty - 1 }
						: item
				);
			}
		}
		default:
			return cartItems; //if nothing is added or subtracted.
	}
};

export default reducer;
