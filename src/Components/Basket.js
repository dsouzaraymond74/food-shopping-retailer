import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Actions';

function groupBy(array) {
	let hash = {};
	for (let i = 0; i < array.length; i++) {
		hash[array[i]['name']] = array[i];
	}
	return hash;
}

const Basket = () => {
	let cartItems = useSelector((state) => state);
	const dispatch = useDispatch();

	let subTotal = 0;
	cartItems.forEach((item) => {
		subTotal = subTotal + item.qty * item.price;
	});

	const { Butter, Soup, Cheese, Bread, Milk } = groupBy(cartItems);

	let butterQty = Butter?.qty;
	let soupQty = Soup?.qty;
	let cheeseQty = Cheese?.qty;
	let breadQty = Bread?.qty;
	let milkQty = Milk?.qty;

	let discount = 0;
//****************** */
	let SoupAndBreadCombo = 0;
	for (let i = 1, breadNos = breadQty; i <= soupQty; i++) {
		breadNos = breadNos - 2;
		if (breadNos < 0) {
			break;
		}
		SoupAndBreadCombo++;
	}
	let SoupAndBreadComboDiscount = SoupAndBreadCombo * Bread?.price;
	if (!isNaN(SoupAndBreadComboDiscount)) {
		SoupAndBreadComboDiscount = parseFloat(
			SoupAndBreadComboDiscount.toFixed(2)
		);
	} else {
		SoupAndBreadComboDiscount = 0;
	}
//******************* */
	let cheeseCombos = 0;
	let cheeseNos = cheeseQty;
	cheeseCombos = Math.floor(cheeseNos / 4) * 2;
	cheeseNos = cheeseNos % 4;
	cheeseCombos = cheeseCombos + Math.floor(cheeseNos / 3);
	let cheeseCombosDiscount = cheeseCombos * Cheese?.price;
	if (!isNaN(cheeseCombosDiscount)) {
		cheeseCombosDiscount = parseFloat(cheeseCombosDiscount.toFixed(2));
	} else {
		cheeseCombosDiscount = 0;
	}
//**************** */
	discount = SoupAndBreadComboDiscount + cheeseCombosDiscount;

	const totalPrice = subTotal - discount;

//**************** */
	return (
		<aside className="block col-1">
			<h2 className="mx-0 my-2 text-lg">Cart Items</h2>
			<div>
				{cartItems.length === 0 && <div>Cart is empty</div>}

				{cartItems.map((item) => (
					<div key={item.id} className="row">
						<div className="col-2">{item.name}</div>
						<div className="col-2">
							<button
								onClick={() => dispatch(removeFromCart(item))}
								className="remove"
							>
								-
							</button>{' '}
							<button
								onClick={() => dispatch(addToCart(item))}
								className="add"
							>
								+
							</button>
						</div>

						<div className="col-2 text-right">
							{item.qty} x £{item.price.toFixed(2)}
						</div>
					</div>
				))}

				{cartItems.length !== 0 && (
					<>
						<hr />
						<div className="row">
							<div className="col-2">SUB TOTAL</div>
							<div className="col-1 text-right">
								£{subTotal.toFixed(2)}
							</div>
						</div>
						<div className="row">
							<div className="col-2">SAVINGS</div>
							<div className="col-1 text-right">
								£{discount.toFixed(2)}
							</div>
						</div>

						<div className="row">
							<div className="col-2">
								<strong>TOTAL AMOUNT</strong>
							</div>
							<div className="col-1 text-right">
								<strong>£{totalPrice.toFixed(2)}</strong>
							</div>
						</div>
						<hr />
						<div className="row">
							<button
								onClick={() => alert('Implement Checkout!')}
							>
								Checkout
							</button>
						</div>
					</>
				)}
			</div>
		</aside>
	);
};
export default Basket;
