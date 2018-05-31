import React, { Component } from 'react';
import logoSrc from './logo.svg';
import './header.css';

export default class extends Component {
	render() {
		return (
			<div className="app-header">
				<div className="app-container">
					<a href="/">
						<img className="app-header__logotype" src={logoSrc} alt=""/>
					</a>
				</div>
			</div>
		);
	}
}