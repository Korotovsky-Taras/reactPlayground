import React, { Component } from 'react';
import Header from '../../containers/header/header';
import Footer from '../../containers/footer/footer';
import CardList from '../../containers/cards/cardlist';
import PageLoader from '../../containers/pageLoader/pageLoader';
import './products.css';

export default class extends Component {
	constructor(){
		super();
		this.state = {
			data: [],
			pageLoading: true
		}
	}

	componentDidMount(...ar){
		console.log("componentDidMount", ar);
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => {
				this.setState((prevState, props) => {
					return {
						...prevState,
						pageLoading: false,
						data: json.map(el => {
							el.liked = false;
							el.likeCount = 0;
							el.image = "https://picsum.photos/200/200/?image=" + el.id;
							el.onDoubleClick = this.props.onCardDoubleClick;
							return el;
						})
					};
				})
			})
	}

	render() {
		return (
			<React.Fragment>
				<Header/>
				<div className="app-wrapper__inner">
					<div className="app-container">
						{this.cardListPageRender()}
					</div>
				</div>
				<Footer/>
			</React.Fragment>
		);
	}

	cardListPageRender = () => {
		if (this.state.pageLoading) return <PageLoader />;
		return <CardList data={this.state.data} />;
	}

}
