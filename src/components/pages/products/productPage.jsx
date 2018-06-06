import React, { Component, Fragment } from 'react';
import Header from '../../containers/header/header.jsx';
import Footer from '../../containers/footer/footer.jsx';
import CardList from '../../containers/cards/cardlist.jsx';
import PageLoader from '../../containers/pageLoader/pageLoader.jsx';
import './products.scss';

export default class extends Component {
	constructor(){
		super();
	}

	componentDidMount(...ar){
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
		if (this.props.pageLoading) return <PageLoader />;
		return <CardList data={this.props.data} />;
	}

}
