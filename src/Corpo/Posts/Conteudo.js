export default
function Conteudo(props){
	const {img} = props.attributes;
	return(
		<div class="conteudo">
			<img src={img} alt=""/>
		</div>
	);
}