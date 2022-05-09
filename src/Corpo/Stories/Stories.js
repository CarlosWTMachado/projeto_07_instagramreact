import Story from "./Story";
import Setinha from "./Setinha";

export default function Stories(){
	const stories_attributes = [
		{image: "assets/img/9gag.svg", usuario: "9gag"},
		{image: "assets/img/meowed.svg", usuario: "meowed"},
		{image: "assets/img/barked.svg", usuario: "barked"},
		{image: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
		{image: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
		{image: "assets/img/respondeai.svg", usuario: "respondeai"},
		{image: "assets/img/filomoderna.svg", usuario: "filomoderna"},
		{image: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
	];
	return(
		<div class="stories">
			{stories_attributes.map(att => <Story image={att.image} usuario={att.usuario}/>)}
			<Setinha/>
		</div>
	);
}