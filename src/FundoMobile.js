export default function FundoMobile(){
	const nomes = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
	return(
		<div class="fundo-mobile">
			{nomes.map(nome => <ion-icon name={nome}></ion-icon>)}
		</div>
	);
}