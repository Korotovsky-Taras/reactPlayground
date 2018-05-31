import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/pages/home/home.jsx';
import ProductPage from './components/pages/products/productPage.jsx';
import ProductItemPage from './components/pages/products/productItemPage.jsx';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app-wrapper">
					<Route exact path="/" component={Home} />
					<Route path="/products" render={({history}) => {
						return <ProductPage onCardDoubleClick={(id, likeCount, liked) => {
							history.push("/product/" + id);
						}}/>
					}} />

					<Route path="/product/:id" component={ProductItemPage} />
				</div>
			</Router>
		);
	}
}

export default App;
