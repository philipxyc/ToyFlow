import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExploreIcon from '@material-ui/icons/Explore';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
				className="Bottom"
			>
				<BottomNavigationAction value={0} label="For you" icon={<FavoriteIcon />} />
				<BottomNavigationAction value={1} label="Discover" icon={<ExploreIcon />} />
				<BottomNavigationAction value={2} label="Account" icon={<AccountCircleIcon />} />
			</BottomNavigation>
		);
	}

	handleChange = (e, v) => {
		this.setState({
			selected: v
		});
		
		if (v === 0) {
			this.props.home.setState({page: "explore"});
		} else if (v === 1) {
			this.props.home.setState({page: "dashboard"});
		} else if (v === 2) {
			this.props.home.setState({page: "account"});
		}
	}
}