import React, { Component } from 'react';
import Card from './card.jsx';
import './cardlist.scss';

export default class extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: props.data
		}
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

	render() {
		return (
			<div className="app-card-list">
				{this.state.data.map((itemData) => {
					return <Card key={itemData.id}
								 image={itemData.image}
								 title={itemData.title}
								 body={itemData.body}
								 liked={itemData.liked}
								 likeCount={itemData.likeCount}
								 index={itemData.id}
								 onRemove={this.onRemove}
								 onDoubleClick={itemData.onDoubleClick}
								 onLiked={this.onLiked} />;
				})}
			</div>
		);
	}

	onRemove = (index) => {
		this.setState((prevState, props) => {
			return {
				...prevState,
				data: prevState.data.filter(el => {
					return el.id !== index;
				})
			};
		})
	};

	onLiked = (index, count) => {
		this.setState((prevState, props) => {
			return {
				...prevState,
				data: prevState.data.map((el) => {
					if(!el.liked && el.id === index) {
						el.likeCount = count;
						el.liked = true;
					}
					return el;
				})
			};
		})
	}
}