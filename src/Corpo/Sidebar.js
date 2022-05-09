import Copyright from "./Sidebar/Copyright";
import Links from "./Sidebar/Links";
import Usuario from "./Sidebar/Usuario";
import Sugestoes from "./Sidebar/Sugestoes";

export default
function Sidebar(){
	const usuario = {
		img: "assets/img/catanacomics.svg",
		user: "catanacomics",
		nome: "Catana"
	};
	return(
		<div class="sidebar">
			<Usuario usuario={usuario}/>
			<Sugestoes/>
			<Links/>
			<Copyright/>
		</div>
	);
}