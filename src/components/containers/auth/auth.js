import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './auth.css';

export default class extends Component {
	constructor(){
		super();
		this.state = {
			empty: true
		}
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
	}

	onInput = () => {
		let isEmpty = this.value === "";
		this.setState((prevState, curState) => {
			return {
				...prevState,
				empty: isEmpty
			}
		});
	}
}