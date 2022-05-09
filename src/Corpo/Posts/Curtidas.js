export default
function Curtidas(props){
	const {img, nome, outro} = props.attributes;
	return(
		<div class="curtidas">
			<img src={img} alt=""/>
			<div class="texto">
				Curtido por <strong>{nome}</strong> e <strong>{outro}</strong>
			</div>
		</div>
	);
}