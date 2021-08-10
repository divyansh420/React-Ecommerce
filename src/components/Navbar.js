import '../css/navbar.css';

const NavBar = () => (
	<header className="navbar">
		<img className="navbar__title navbar__item" src="logo.svg" alt="Bella" width="80" height="80" />
		<div className="navbar__item">Home</div>
		<div className="navbar__item">Shop</div>
		<div className="navbar__item">Favorites</div>
		<div className="navbar__item">Orders</div>
		<div className="navbar__item">Contact</div>
		<div className="navbar__item navbar__right">Profile</div>
		<div className="navbar__item">Cart</div>
	</header>
);

export default NavBar;
