import React from 'react';
import { Link } from 'react-router-dom'

 const Navigationbar = ()=>{
    return(
      <div className='navbar'>
        <ul>
        <li><Link to="/" className='link'>Home</Link></li>
          <li><Link to="/cart" className='link'>My Cart</Link></li>
          <li><Link to="/favorites" className='link'>My Favorites</Link></li>
          
        </ul>
      </div>
    )
}

export default Navigationbar;