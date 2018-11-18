import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import tileData from "./workoutTileData";
import FaceTime from './FaceTime'


const style = {
	root: {
		paddingBottom: 100
	}
};

var state = {
	live: false,
};

export default class Workout extends React.Component {
	render() {
		if (!this.state) {
			return (
				<div style={style.root}>
					<GridList cellHeight={200} spacing={2}>
						{tileData.map((tile, i) => (
							<GridListTile
								key={tile.img}
								cols={tile.featured ? 2 : 1}
								rows={tile.featured ? 2 : 1}
								onClick={
									() => {
										if (tile.like) {
											this.props.parent.setState({workoutItemId: i});
											this.props.home.setState({prePage: this.props.home.state.page, page: "workout_item"});
										}
									}
								}
								style={{
										borderWidth: 1,
										borderColor: 'lightgray',
										borderStyle: 'solid'
									  }}
								onClick={()=>{this.setState({live: true});}}
							>
								<img src={tile.img} alt={tile.title} />
								<GridListTileBar
									title={tile.title}
									titlePosition="top"
									actionIcon={
										<IconButton color={tile.like ? "secondary" : "default"} style={tile.like ? {} : {color: "white"}}>
										{
											tile.like ? <FavoriteIcon /> : <StarBorderIcon />
										}
										</IconButton>
									}
									actionPosition="left"
								/>
							</GridListTile>
						))}
					</GridList>
				</div>
			);
		}
		else{
		    return(
		          <FaceTime />
		        );
		}
	}
}
