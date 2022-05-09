import Separador from "./../../Separador";
import Fundo from "./Fundo";
import Conteudo from "./Conteudo";
import Topo from "./Topo";

export default 
function Post(props){
	const {topo, conteudo, fundo} = props.attributes;
	return(
		<div class="post">
			<Topo attributes={topo}/>
			<Conteudo attributes={conteudo}/>
			<Fundo attributes={fundo}/>
			<Separador/>
		</div>
	);
}