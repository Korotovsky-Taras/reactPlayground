import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
	ConnectedRouter
} from 'react-router-redux'

import Home from './components/pages/home/home.jsx';
import ProductPage from './components/pages/products/productPage.jsx';
import ProductItemPage from './components/pages/products/productItemPage.jsx';

import allRedusers from './store/redusers/index.js';

const store = createStore(
		allRedusers,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="app-wrapper">
						<Route exact path="/" component={Home} />
						<Route path="/products" component={ProductPage} />
						<Route path="/product/:id" component={ProductItemPage} />
					</div>
				</Router>
			</Provider>
		);
	}
}

store.subscribe((e) => {
	console.log(store.getState())
});

export default App;
