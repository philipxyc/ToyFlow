import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import MdIconCake from '@material-ui/icons/Cake';
import MdIconSchool from '@material-ui/icons/School';
import MdIconStars from '@material-ui/icons/Stars';
import MdIconFlashOn from '@material-ui/icons/FlashOn';
import MdIconAllOut from '@material-ui/icons/AllOut';
import MdIconHistory from '@material-ui/icons/History';
import MdIconChangeHistory from '@material-ui/icons/ChangeHistory';


// import yuehaoavatar from './assets/avatar.png';
export default class Account extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					title='王小明'
					// subtitle='学渣一枚，大神们多多关照'
					// avatar={yuehaoavatar}
				/>
				<CardMedia image='.'>
					<Divider/>
					<List>
						<ListItem>
				          <Avatar>
				            <MdIconCake />
				          </Avatar>
				          <ListItemText primary="3岁"/>
				        </ListItem>
					</List>
				</CardMedia>
				<CardActions>
					<Button variant="contained" color="primary" size="small">
					更改信息
					</Button>
				</CardActions>
			</Card>
		);
	}
}
