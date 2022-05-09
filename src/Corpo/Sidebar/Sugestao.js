import SugestaoUsuario from "./SugestaoUsuario";
import Seguir from "./Seguir";

export default
function Sugestao(props){
	return(
		<div class="sugestao">
			<SugestaoUsuario usuario={props.usuario}/>
			<Seguir/>
		</div>
	);
}