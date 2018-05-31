import React, { Component, Fragment } from 'react';
import Header from '../../containers/header/header.jsx';
import Footer from '../../containers/footer/footer.jsx';
import AuthForm from '../../containers/auth/auth.jsx';
import './home.scss';

export default class extends Component {
	render() {
		return (
			<Fragment>
				<Header/>
				<AuthForm />
				<Footer/>
			</Fragment>
		);
	}
}
