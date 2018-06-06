import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { onCardLike, onCardRemove } from '../../../store/actions/index';
import Card from './card.jsx';
import './cardlist.scss';

class CardList extends Component {

	render() {
		return (
			<div className="app-card-list">
				{this.props.cards.map(({id, image, title, body, liked, likeCount}) => {
					return <Card key={id}
								 id={id}
								 image={image}
								 title={title}
								 body={body}
								 liked={liked}
								 likeCount={likeCount}
								 onRemoveCardEvent={this.props.onCardRemove}
								 onDoubleClickCardEvent={this.onCardDoubleClick}
								 onLikeCardEvent={this.props.onCardLike}
					/>;
				})}
			</div>
		);
	}

	onCardDoubleClick = (id) => {
		const { history } = this.props;
		history.push("/product/" + id);
	}

	componentWillMount(...ar){
		// console.log("componentWillMount", ar);
		console.log(this)
	}

	shouldComponentUpdate(...ar){
		// console.log("shouldComponentUpdate", ar);
		return true;
	}

	componentWillUpdate(...ar){
		// console.log("componentWillUpdate", ar);
	}

	componentDidUpdate(...ar){
		// console.log("componentDidUpdate", ar);
	}

	componentWillReceiveProps(...ar){
		// console.log("componentWillReceiveProps", ar);
	}
}

function mapStateToProps (state) {
	return {
		cards: state.cards
	}
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({
		onCardLike: onCardLike,
		onCardRemove: onCardRemove
	}, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(CardList));