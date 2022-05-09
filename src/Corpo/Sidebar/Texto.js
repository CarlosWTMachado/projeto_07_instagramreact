import Nome from "./Nome";
import Razao from "./Razao";

export default
function Texto(props){
	const {nome, razao} = props;
	return(
		<div class="texto">
			<Nome nome={nome}/>
			<Razao razao={razao}/>
		</div>
	);
}