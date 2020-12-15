import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {addToCard} from '../../redux/card/card.Action'
import './header.css'

const Header = (props) => {
	let wanted = props.wantedItem;
	let card = props.card;

	return (
		<nav className="menu">
			<div className="home-category">
				<Link className='btn' to="/">Home</Link>
				<Link className='btn' to="/category/">Category</Link>
			</div>
			<div className="wanted-card">
				<Link className='btn' to="/wanted-page/"  >Wanted <span className='delete-btn-card'>{wanted.length}</span> </Link>
				<Link className='btn' to="/card-page/"  >Card <span className='delete-btn-card' >{card.length}</span></Link>
			</div>
		</nav>
	);
}


const mapStateToProps = (state) => {
  return {
		wantedItem: state.wanted.wanted,
		card: state.card.cardList

	}
}

export default connect(mapStateToProps, {addToCard})(Header);