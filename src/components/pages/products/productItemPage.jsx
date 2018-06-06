import React, { Component, Fragment } from 'react';
import Header from '../../containers/header/header.jsx';
import Footer from '../../containers/footer/footer.jsx';
import ReactImageFallback from "react-image-fallback";
import { onLoadCardData, setProductPageCard, getAllCards } from '../../../store/actions/index';
import PagePlaceholder from '../../containers/pageLoader/pageLoader.jsx';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import emptySrc from './emptyRecord.svg';

class ProductItemPage extends Component {
	componentWillMount() {
	}

	componentDidMount(...ar){
	}

	componentDidUpdate(){

	}

	render() {

		const {params} = this.props.match;
		const card = this.props.cards.filter(el => el.id === 1* params.id)[0];

		if (card) {
			const {image, body, title, likeCount} = card;

			return (
				<Fragment>
					<Header/>
					<div className="app-wrapper__inner">
						<div className="app-container">
							<ReactImageFallback
									src={image}
									fallbackImage={emptySrc}
									initialImage={emptySrc}
									alt="image"
									className="app-product-item__image" />
							<div className="app-product-item__title">{body}</div>
							<div className="app-product-item__subtitle">{title}</div>
							<div className="app-product-item__liked">{likeCount}</div>
						</div>
					</div>
					<Footer/>
				</Fragment>
			);

		} else {
			return (
				<Fragment>
					<Header/>
					<div className="app-wrapper__inner">
						<div className="app-container">
							<PagePlaceholder>Страница отсутствует</PagePlaceholder>
						</div>
					</div>
					<Footer/>
				</Fragment>
			);
		}
	}

}

function mapStateToProps (state) {
	return {
		cards: state.cards
	}
}

export default withRouter(connect(mapStateToProps)(ProductItemPage));