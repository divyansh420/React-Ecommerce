import { Link } from 'react-router-dom';
import '../css/navbar.css';

const NavBar = () => (
	<header className="navbar">
		<Link to="/">
			<img className="navbar__title navbar__item" src="logo.svg" alt="Bella" width="80" height="80" />
		</Link>
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
);

export default NavBar;
