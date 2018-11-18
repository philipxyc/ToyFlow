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


class Item extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Card>
				<CardMedia
					className={classes.media}
					component='div'
				>
					<video controls autoplay loop style={{width: "100%"}}>
						<source type="video/mp4" src={this.props.video} />
					</video>
				</CardMedia>
				<CardContent>
					<Typography component="p">
						This impressive paella is a perfect party dish and a fun meal to cook together with your
						guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
		description: 'This impressive paella is a perfect party dish'
	}
];

class Explore extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div style={{padding: '0px 10px'}}>
				<Zoom in={true}>
					<div style={{ marginBottom: '20px' }}>
						<Item classes={classes} video={TOY_LIST[0].video_src} description={TOY_LIST[0].description} />
					</div>
				</Zoom>

				<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
					<Button variant="extendedFab" color="primary">
						<ArrowUpwardIcon /> Choose
					</Button>
					<Button style={{marginLeft: 20, backgroundColor: '#2196f3'}} variant="extendedFab" color="primary">
						<ArrowDownwardIcon /> Choose
					</Button>
				</div>

				<Zoom in={true}>
					<div style={{ marginTop: '20px' }}>
						<Item classes={classes} video={TOY_LIST[1].video_src} description={TOY_LIST[1].description} />
					</div>
				</Zoom>
			</div>
		);
	}
}

Explore.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Explore);