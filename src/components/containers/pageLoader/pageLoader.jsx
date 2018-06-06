import React, { Component } from 'react';
import './pageLoader.scss';

export default class extends Component {
	render() {
		return (
			<div className="app-page-loader">
				{this.renderText()}
			</div>
		);
	}
	renderText = () => {
		let text = this.props.children;
		let data = [];
		for(let key in text){
			data.push(<span>{text.charAt(key)}</span>)
		}
		return data;
	}
}