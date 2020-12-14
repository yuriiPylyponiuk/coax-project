import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'
const Header = () => {
	return (
		<nav className="menu">
			<div className="home-category">
				<Link className='btn' to="/">Home</Link>
				<Link className='btn' to="/category/">Category</Link>
			</div>
			<div className="wanted-card">
				<Link className='btn' to="/wanted-page/">Wanted</Link>
				<Link className='btn' to="/card-page/">Card</Link>
			</div>
		</nav>
	);
}

export default Header;