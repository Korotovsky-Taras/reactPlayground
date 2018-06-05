import React, { Component, Fragment } from 'react';
import Header from '../../containers/header/header.jsx';
import Footer from '../../containers/footer/footer.jsx';
import ReactImageFallback from "react-image-fallback";
import PageLoader from '../../containers/pageLoader/pageLoader.jsx';
import emptySrc from './emptyRecord.svg';

export default class extends Component {
	constructor(){
		super();
		this.state = {
			pageLoading: true,
			data: {}
		}
	}

	componentDidMount(...ar){
		const {params} = this.props.match;

		//TODO теряем данные, надо что бы все параметры кроме id приходили с базы а не дополнялись прокидыванием (liked, likedCount, image)
		// fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
		// 	.then(response => response.json())
		// 	.then(json => {
		// 		this.setState((prevState, props) => {
		// 			return {
		// 				...prevState,
		// 				pageLoading: false,
		// 				data: {
		// 					...json,
		// 					image: "https://picsum.photos/200/200/?image=" + params.id,
		// 				}
		// 			};
		// 		})
		// 	});
	}

	componentDidUpdate(){
		console.log("componentDidUpdate ", this.state.data);
	}

	render() {

		if (this.state.pageLoading) {
			return (
				<Fragment>
					<Header/>
					<div className="app-wrapper__inner">
						<div className="app-container">
							<PageLoader />
						</div>
					</div>
					<Footer/>
				</Fragment>
			);
		}

		const {image, body, title} = this.state.data;

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
					</div>
				</div>
				<Footer/>
			</Fragment>
		);
	}

}
