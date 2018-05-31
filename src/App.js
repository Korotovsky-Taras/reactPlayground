import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/pages/home/home';
import Products from './components/pages/products/products';
import './App.css';

class App extends Component {
	constructor(){
		super();
	}
	render() {
		return (
			<Router>
				<div className="app-wrapper">
					<Route exact path="/" component={Home} />
					<Route path="/products" render={({history}) => {
						return <Products onCardDoubleClick={(id) => {
							history.push("/product/" + id);
						}}/>
					}} />

					{/*<Route path="/products/:id" component={Product} />*/}
				</div>
			</Router>
		);
	}
}

export default App;
