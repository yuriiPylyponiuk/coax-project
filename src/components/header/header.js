import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'
const Header = () => {
    return (
        <nav className="menu">
            <Link className='btn' to="/">Home</Link>
            <Link className='btn' to="/category/">Category</Link>
            <Link className='btn' to="/wanted-page/">Wanted</Link>
            <Link className='btn' to="/card-page/">Card</Link>
        </nav>
    );
}

export default Header;