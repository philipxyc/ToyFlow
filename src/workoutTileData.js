import badminton from "./assets/badminton-grass-racket.jpg";
import situp from "./assets/situp.jpg";
import running from "./assets/running.jpg";
import football from "./assets/football.jpg";
import hiking from "./assets/hiking.jpg";
import swimming from "./assets/swimming.jpg";
import skateboards from "./assets/skateboards.jpg";
import pushup from "./assets/pushup.jpg";
import gymnastics from "./assets/aerobics-backlit.jpg";
import basketball from "./assets/basketball.jpg";

const workoutTileData = [
	{
		img: badminton,
		title: 'Electric',
		featured: true
	},
	{
		img: situp,
		title: 'Transportaion',
		featured: false,
		like: true,
		description: "The sit-up (or curl-up) is an abdominal endurance training exercise commonly performed to strengthen and tone the abdominal muscles. It is similar to a crunch (crunches target the rectus abdominus and also work the external and internal obliques), but sit-ups have a fuller range of motion and condition additional muscles."
	},
	{
		img: football,
		title: 'Garden',
		featured: false
	},
	{
		img: running,
		title: 'Blocks',
		featured: true
	},
	{
		img: hiking,
		title: 'Lego fighter',
		featured: false
	},
	{
		img: swimming,
		title: 'Wood',
		featured: false
	},
	{
		img: skateboards,
		title: 'Story board',
		featured: false
	},
	{
		img: pushup,
		title: 'Graw',
		featured: false,
		like: true,
		description: "A push-up (or press-up) is a common calisthenics exercise performed in a prone position by raising and lowering the body using the arms. Push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole. Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training."
	},
	{
		img: basketball,
		title: 'Cube',
		featured: false
	},
	{
		img: gymnastics,
		title: 'Pints',
		featured: false
	}
];

export default workoutTileData;
