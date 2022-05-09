import Post from "./Post";

export default 
function Posts(){
	const attributes = [
		{
			topo: {
				img: "assets/img/meowed.svg",
				nome: "meowed"
			},
			conteudo: {
				img: "assets/img/gato-telefone.svg"
			},
			fundo: {
				img: "assets/img/respondeai.svg",
				nome: "respondeai",
				outro: "outras 101.523 pessoas"
			}
		},
		{
			topo: {
				img: "assets/img/barked.svg",
				nome: "barked"
			},
			conteudo: {
				img: "assets/img/dog.svg"
			},
			fundo: {
				img: "assets/img/adorable_animals.svg",
				nome: "adorable_animals",
				outro: "outras 99.159 pessoas"
			}
		}
	];
	return(
		<div class="posts">
			{attributes.map(att => <Post attributes={att}/>)}
		</div>
	);
}