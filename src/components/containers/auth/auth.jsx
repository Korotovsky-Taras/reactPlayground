import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './auth.scss';

export default class extends Component {
	constructor(){
		super();
		this.state = {
			empty: true
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.empty !== nextState.empty;
	}

	render() {
		return (
			<div className="app-auth__form">
				<input className="app-auth__form-input" onInput={this.onInput} placeholder={"Назовитесь"} type="text"/>
				{this.buttonRender()}
			</div>
		);
	}

	buttonRender = () => {
		if (!this.state.empty) {
			return <Link className="app-auth__form-button" to={"/products"}>Поехали</Link>
		}
	};

	onInput = (event) => {
		let isEmpty = event.target.value.toString().trim() === "";
		this.setState((prevState, curState) => {
			return {
				...prevState,
				empty: isEmpty
			}
		});
	}
}