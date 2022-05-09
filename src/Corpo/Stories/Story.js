import Usuario from "./Usuario";
import Imagem from "./Imagem";



export default function Story(props){
	return(
		<div class="story">
			<Imagem link={props.image}/>
			<Usuario nome={props.usuario}/>
		</div>
	);
}