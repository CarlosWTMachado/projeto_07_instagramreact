import TopoAcoes from "./TopoAcoes";
import TopoUsuario from "./TopoUsuario";

export default
function Topo(props){
	const usuario = props.attributes;
	return(
		<div class="topo">
			<TopoUsuario attributes={usuario}/>
			<TopoAcoes/>
		</div>
	);
}