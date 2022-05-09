export default
function Usuario(props){
	const {img, user, nome} = props.usuario;
	return(
		<div class="usuario">
			<img src={img} alt=""/>
			<div class="texto">
				<strong>{user}</strong>
				{nome}
			</div>
		</div>
	);
}