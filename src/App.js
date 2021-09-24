import { useSelector } from 'react-redux';
import Basket from './Components/Basket';
import Main from './Components/Main';
import Navbar from './Components/Navbar/Navbar';
import Detail from './Detail';
import Offers from './Offers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Components/Contact';
import Inquiry from './Components/Inquiry';

function App() {
	const { products } = Detail;
	let cartItems = useSelector((state) => state);
	return (
		<Router>
			<div className="App">
				<Navbar countCartItems={cartItems.length}></Navbar>
				<Switch>
					<Route path="/" exact>
						<main>
							<div className="row">
								<Main products={products}></Main>
								<Basket />
							</div>
							<Offers />
						</main>
					</Route>
					<Route path="/contact" exact>
						<Contact />
					</Route>
					<Route path="/inquiry" exact>
						<Inquiry />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
