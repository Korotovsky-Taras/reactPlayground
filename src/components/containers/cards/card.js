import React, { Component } from 'react';
import ToolbarButton from './cardToolbarButton';
import { Link } from "react-router-dom";
import './card.css';

export default class extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div onDoubleClick={this.doubleClickEvent} className="app-card">
				<img className="app-card__image" src={this.getPropsData("image")} alt=""/>
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
		console.log(1);
	}

	doubleClickEvent = (event) => {
		this.props.onDoubleClick(this.props.id);
	}

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