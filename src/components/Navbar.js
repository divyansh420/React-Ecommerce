import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import '../css/navbar.css';

const NavBar = () => (
	<Router>
		<header className="navbar">
			<img className="navbar__title navbar__item" src="logo.svg" alt="Bella" width="80" height="80" />
			<Link className="navbar__item" to="/">
				Home
			</Link>
			<Link className="navbar__item">Shop</Link>
			<Link className="navbar__item">Favorites</Link>
			<Link className="navbar__item">Orders</Link>
			<Link className="navbar__item">Contact</Link>
			<Link className="navbar__item navbar__right">Profile</Link>
			<Link className="navbar__item" to="/cart">
				Cart
			</Link>
		</header>
		<Switch>
			<Route path="/">
				<Home />
			</Route>
			<Route path="/cart">
				<Cart />
			</Route>
		</Switch>
	</Router>
);

export default NavBar;
