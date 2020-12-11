import React from "react";
import WontedList from "../../components/wontedList/wontedList";
import {connect} from "react-redux"
import {delFromWantedList} from '../../redux/wanted/wantedsActions'

class WontedPage extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<WontedList delFromWantedList={delFromWantedList} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {...state.wanted}
}

export default connect(mapStateToProps, {delFromWantedList})(WontedPage);