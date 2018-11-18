import React from 'react';
import Bottom from './Bottom';
import Header from "./Header";
import Content from "./Content";


export default class Home extends React.Component {
	state = {
		page: 'explore',
		prePage: null
	};

	render() {
		return (
			<div>
				<Header />
				<div style={{height: '60px'}}></div>
				<Content home={this} page={this.state.page} />
				<div style={{height: '60px'}}></div>
				<Bottom home={this} />
			</div>
		);
	}
}
