export default function Icones(){
	const nomes = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
	return(
		<div class="icones">
			{nomes.map(nome => <ion-icon name={nome}></ion-icon>)}
		</div>
	);
}