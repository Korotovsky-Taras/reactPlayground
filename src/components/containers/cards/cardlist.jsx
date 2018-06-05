import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onLikeCard, onDoubleClickCard, onRemoveCard } from '../../../actions/index';
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
								 onRemoveCard={this.props.onRemoveCard}
								 // onDoubleClick={this.props.onDoubleClickCard}
								 onLikeCard={this.props.onLikeCard}
					/>;
				})}
			</div>
		);
	}

	componentWillMount(...ar){
		// console.log("componentWillMount", ar);
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
		onLikeCard: onLikeCard,
		// onDoubleClickCard: onDoubleClickCard,
		onRemoveCard: onRemoveCard
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CardList);