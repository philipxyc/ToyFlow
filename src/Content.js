import React from 'react';
import Account from "./Account";
import ForYou from "./ForYou";
import Workout from "./Workout"


export default class Content extends React.Component {
	render() {
		if (this.props.page == 'explore') {
			return (
				<ForYou />
			);
		} else if (this.props.page == 'dashboard') {
			return (
				<Workout />
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
