import React, { Component } from 'react';
import './cardToolbarButton.css';

export default class extends Component {
	render() {
		return (
			<button className={this.props.className}
					onClick={this.props.onClickHandler}
					onDoubleClick={(e) => e.stopPropagation()}>
				{this.props.children}
			</button>
		);
	}
}