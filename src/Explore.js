import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import video from "/static/media/1.mp4";

const styles = theme => ({
	card: {
		maxWidth: 400,
	},
	actions: {
		display: 'flex',
	}
});

class Explore extends React.Component {
	state = { expanded: false };

	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};

	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.card}>
				<CardMedia
					className={classes.media}
					component='div'
				>
					<video controls style={{width: "100%"}}>
						<source type="video/mp4" src='http://ms.xiayc.com/GDGmedia/1.mp4' />
					</video>
				</CardMedia>
				<CardContent>
					<Typography component="p">
						This impressive paella is a perfect party dish and a fun meal to cook together with your
						guests. Add 1 cup of frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions className={classes.actions} disableActionSpacing>
					<IconButton aria-label="Add to favorites">
						<FavoriteIcon />
						</IconButton>
						<IconButton aria-label="Share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
		);
	}
}

Explore.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Explore);