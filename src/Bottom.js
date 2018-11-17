import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExploreIcon from '@material-ui/icons/Explore';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import "./css/Bottom.css";


export default class Bottom extends React.Component {
	state = {
		selected: 0
	};

	render() {
		return (
			<BottomNavigation
				value={this.state.selected}
				onChange={this.handleChange}
				showLabels
				color="secondary"
				classes={{ root: "Bottom"}}
			>
				<BottomNavigationAction value={0} label="Explore" icon={<ExploreIcon />} />
				<BottomNavigationAction value={1} label="Dashboard" icon={<ViewQuiltIcon />} />
				<BottomNavigationAction value={3} label="Account" icon={<AccountCircleIcon />} />
			</BottomNavigation>
		);
	}

	handleChange = (e, v) => {
		console.log("xxx")
		this.setState({
			selected: v
		});
		
		// if (v === 0) {
		// 	this.props.home.setState({page: "workout"});
		// } else if (v === 1) {
		// 	this.props.home.setState({page: "moments"});
		// } else if (v === 2) {
		// 	this.props.home.setState({page: "notification"});
		// } else if (v === 3) {
		// 	this.props.home.setState({page: "account"});
		// }
	}
}