import React, { Component } from 'react';
import ReactImageFallback from "react-image-fallback";
import ToolbarButton from './cardToolbarButton.jsx';
import emptySrc from './emptyRecord.svg';
import './card.scss';

export default class extends Component {
	render() {
		return (
			<div onDoubleClick={this.doubleClickHandler} className="app-card">
				<ReactImageFallback
						src={this.props.image}
						fallbackImage={emptySrc}
						initialImage={emptySrc}
						alt="image"
						className="app-card__image" />
				<div className="app-card__title">{this.props.title}</div>
				<div className="app-card__subtitle">{this.props.body}</div>
				<ToolbarButton
						onClickHandler={this.likeButtonHandler}
					    className="app-card__like-button">
					{this.getLikeButtonText()}
				</ToolbarButton>
				<ToolbarButton
						onClickHandler={this.deleteButtonHandler}
						className="app-card__delete-button">
					Delete
				</ToolbarButton>
			</div>
		);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.liked !== this.props.liked;
	}

	componentDidUpdate(){
		console.log("Card " + this.props.index + " is update");
	}

	getLikeButtonText = () => this.props.liked ? "Liked: " + this.props.likeCount : "Like this!";

	likeButtonHandler = (e) => {
		if(this.props.liked) return;
		this.props.onLikeCardEvent(this.props);
	};

	deleteButtonHandler = (e) => {
		this.props.onRemoveCardEvent(this.props)
	};

	doubleClickHandler = (e) => {
		this.props.onDoubleClickCardEvent(this.props.id)
	};

}