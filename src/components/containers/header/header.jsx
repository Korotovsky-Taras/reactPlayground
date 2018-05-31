import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logoSrc from './logo.svg';
import './header.scss';

export default class extends Component {
	render() {
		return (
			<div className="app-header">
				<div className="app-container">
					<Link to="/">
						<img className="app-header__logotype" src={logoSrc} alt=""/>
					</Link>
				</div>
			</div>
		);
	}
}