import Acoes from "./Acoes";
import Curtidas from "./Curtidas";

export default
function Fundo(props){
	const curtidas = props.attributes;
	return(
		<div class="fundo">
			<Acoes/>
			<Curtidas attributes={curtidas}/>
		</div>
	);
}