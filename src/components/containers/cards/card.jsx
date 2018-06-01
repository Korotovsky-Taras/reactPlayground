import React, { Component } from 'react';
import ReactImageFallback from "react-image-fallback";
import ToolbarButton from './cardToolbarButton.jsx';
import emptySrc from './emptyRecord.svg';
import './card.scss';

export default class extends Component {
	render() {
		return (
			<div onDoubleClick={this.doubleClickEvent} className="app-card">
				<ReactImageFallback
						src={this.getPropsData("image")}
						fallbackImage={emptySrc}
						initialImage={emptySrc}
						alt="image"
						className="app-card__image" />
				<div className="app-card__title">{this.getPropsData("title")}</div>
				<div className="app-card__subtitle">{this.getPropsData("body")}</div>
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

	doubleClickEvent = (event) => {
		this.props.onDoubleClick(this.props.index);
	};

	getLikeButtonText = () => this.getPropsData("liked") ? "Liked: " + this.getPropsData("likeCount") : "Like this!";

	likeButtonHandler = (event) => {
		if(this.getPropsData("liked")) return;
		this.props.onLiked.call(this, this.props.index, this.getPropsData("likeCount") + 1);
	};

	deleteButtonHandler = (event) => {
		this.props.onRemove(this.props.index)
	};

	getPropsData(prop) {
		if(this.props.hasOwnProperty(prop)){
			return this.props[prop];
		}
		return "";
	}
}