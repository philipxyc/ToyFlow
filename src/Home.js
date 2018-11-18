import React from 'react';
import Bottom from './Bottom';
import Header from "./Header";
import Content from "./Content";
import Checkout from "./Checkout";

export default class Home extends React.Component {
	state = {
		page: 'explore',
		prePage: null,
		reg: false
	};

	render() {
		if (this.state.reg) {
			return (
				<div>
					<Header />
					<div style={{height: '61px'}}></div>
					<Content home={this} page={this.state.page} />
					<div style={{height: '60px'}}></div>
					<Bottom home={this} />
				</div>
			);
		}
		else{
			return (
				<div>
				<Checkout home={this}/>
				</div>
			);
		}
	}
}
