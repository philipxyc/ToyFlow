import React from 'react';
import Account from "./Account";
import ForYou from "./ForYou";


export default class Content extends React.Component {
	render() {
		if (this.props.page == 'explore') {
			return (
				<ForYou />
			);
		} else if (this.props.page == 'dashboard') {
			return (
				<div>dashboard</div>
			);
		} else if (this.props.page == 'account') {
			return (
				<Account />
			);
		} else {
			return (
				<div>Others</div>
			);
		}
		
	}
}
