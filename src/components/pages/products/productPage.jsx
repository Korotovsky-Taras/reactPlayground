import React, { Component, Fragment } from 'react';
import Header from '../../containers/header/header.jsx';
import Footer from '../../containers/footer/footer.jsx';
import CardList from '../../containers/cards/cardlist.jsx';
import PageLoader from '../../containers/pageLoader/pageLoader.jsx';
import './products.scss';

export default class extends Component {
	constructor(){
		super();
		this.state = {
			pageLoading: true
		}
	}

	componentDidMount(...ar){
		// fetch('https://jsonplaceholder.typicode.com/posts')
		// 	.then(response => response.json())
		// 	.then(json => {
		// 		this.setState((prevState, props) => {
		// 			return {
		// 				...prevState,
		// 				pageLoading: false,
		// 				data: json.map(el => {
		// 					el.liked = false;
		// 					el.likeCount = 0;
		// 					el.image = "https://picsum.photos/200/200/?image=" + el.id;
		// 					el.onDoubleClick = this.props.onCardDoubleClick;
		// 					return el;
		// 				})
		// 			};
		// 		})
		// 	})
	}

	render() {
		return (
			<Fragment>
				<Header/>
				<div className="app-wrapper__inner">
					<div className="app-container">
						<CardList />
					</div>
				</div>
				<Footer/>
			</Fragment>
		);
	}

	cardListPageRender = () => {
		if (this.state.pageLoading) return <PageLoader />;
		return <CardList data={this.state.data} />;
	}

}
