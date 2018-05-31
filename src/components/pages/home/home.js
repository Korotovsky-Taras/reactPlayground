import React, { Component } from 'react';
import Header from '../../containers/header/header';
import Footer from '../../containers/footer/footer';
import AuthForm from '../../containers/auth/auth';
import './home.scss';

export default class extends Component {
	render() {
		return (
			<React.Fragment>
				<Header/>
				<div className="app-wrapper__inner">
					<div className="app-container">
						<AuthForm />
					</div>
				</div>
				<Footer/>
			</React.Fragment>
		);
	}
}
