import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Zoom from '@material-ui/core/Zoom';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


class Item extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Card>
				<CardMedia
					className={classes.media}
					component='div'
					image='.'
				>
					<video controls autoPlay loop style={{width: "100%"}}>
						<source type="video/mp4" src={this.props.video} />
					</video>
				</CardMedia>
				<CardContent>
					<Typography component="p">
						{this.props.description}
					</Typography>
				</CardContent>
			</Card>
		);
	}
}

const styles = theme => ({
	actions: {
		display: 'flex',
		marginBottom: '20px'
	}
});

const TOY_LIST = [
	{
		video_src: 'http://ms.xiayc.com/GDGmedia/1.mp4',
		description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
	},
	{
		video_src: 'http://ms.xiayc.com/GDGmedia/2.mp4',
		description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
	},
	{
		video_src: 'http://ms.xiayc.com/GDGmedia/3.mp4',
		description: '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer'
	},
	{
		video_src: 'http://ms.xiayc.com/GDGmedia/4.mp4',
		description: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate '
	}
];

class ForYou extends React.Component {
	state = {
		msgOpen: false,
		toyListIndex: 0,
		zoomIn: true
	};

	handleChoose = () => {
		this.setState({msgOpen: true, zoomIn: false});

		let temp = this.state.toyListIndex;
		temp += 2;

		if (temp < TOY_LIST.length) {
			this.setState({toyListIndex: temp});
		} else {
			this.setState({toyListIndex: 0});
		}

		setTimeout(() => {
			this.setState({zoomIn: true});
		}, 200);
	};

	handleMsgClose = () => {
		this.setState({msgOpen: false});
	};

	render() {
		const { classes } = this.props;

		return (
			<div style={{padding: '0px 10px'}}>
				<Zoom in={this.state.zoomIn}>
					<div style={{ marginBottom: '20px' }}>
						<Item classes={classes} video={TOY_LIST[this.state.toyListIndex].video_src} description={TOY_LIST[this.state.toyListIndex].description} />
					</div>
				</Zoom>

				<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
					<Button variant="extendedFab" color="primary" onClick={this.handleChoose}>
						<ArrowUpwardIcon /> Choose
					</Button>
					<Button onClick={this.handleChoose} style={{marginLeft: 20, backgroundColor: '#2196f3'}} variant="extendedFab" color="primary">
						<ArrowDownwardIcon /> Choose
					</Button>
				</div>

				<Zoom in={this.state.zoomIn}>
					<div style={{ marginTop: '20px' }}>
						<Item classes={classes} video={TOY_LIST[this.state.toyListIndex + 1].video_src} description={TOY_LIST[this.state.toyListIndex + 1].description} />
					</div>
				</Zoom>

				<div>
					<Snackbar
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						open={this.state.msgOpen}
						autoHideDuration={800}
						onClose={this.handleMsgClose}
						ContentProps={{
							'aria-describedby': 'message-id',
						}}
						message={<span style={{ display: 'flex', alignItems: 'center' }} id="message-id"><CheckCircleIcon style={{marginRight: 20}} /> Preference Saved</span>}
						action={[
							<IconButton
								key="close"
								aria-label="Close"
								color="inherit"
								onClick={this.handleMsgClose}
							>
								<CloseIcon />
							</IconButton>,
						]}
					/>
				</div>
			</div>
		);
	}
}

ForYou.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForYou);