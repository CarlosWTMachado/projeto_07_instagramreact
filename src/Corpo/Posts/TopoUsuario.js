export default
function TopoUsuario(props){
	const {img, nome} = props.attributes;
	return(
		<div class="usuario">
			<img src={img} alt=""/>
			{nome}
		</div>
	);
}