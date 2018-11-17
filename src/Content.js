import React from 'react';
import Account from "./Account";
import Explore from "./Explore";


export default class Content extends React.Component {
	render() {
		if (this.props.page == 'explore') {
			return (
				<Explore />
			);
		} else if (this.props.page == 'dashboard') {
			return (
				<div>dashboard</div>
			);
		} else if (this.props.page == 'account') {
			return (
				<div>account</div>
			);
		} else {
			return (
				<div>Others</div>
			);
		}
		
	}
}
