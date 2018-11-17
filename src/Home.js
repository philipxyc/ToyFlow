import React from 'react';
import Bottom from './Bottom';
import Header from "./Header";
import Content from "./Content";

export default class Home extends React.Component {
	state = {
		appMode: true,
		prePage: null
	};

	render() {
		return (
			<div>
				<Header />
				<Content home={this}/>
				<Bottom home={this} />
			</div>
		);
	}
}
