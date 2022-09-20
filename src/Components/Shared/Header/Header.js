import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>

            <div className="col-md-3">
                <h1 className="fc-white">Bella</h1>
            </div>
            <div className="col-md-6">
                <Link to="/">Home</Link>
                <Link to="/review">Shop</Link>
                <Link to="/dashboard">Favourite</Link>
                <Link to="/blogs">Order</Link>
                <Link to="/about">Contact</Link>
            </div>
            <div className="col-md-2">
                <h4>Profile</h4>
                <i className="fa fa-star"></i>


            </div>
        </nav>
    );
};

export default Header;