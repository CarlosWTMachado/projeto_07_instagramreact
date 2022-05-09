import { useState } from "react";
export default 
function Acoes(){
	const [nome, setNome] = useState("heart-outline");
	return(
		<div class="acoes">
			<div>
				<ion-icon name={nome} id={nome} onClick={() => setNome((nome === "heart") ? ("heart-outline") : ("heart"))}></ion-icon>
				<ion-icon name="chatbubble-outline"></ion-icon>
				<ion-icon name="paper-plane-outline"></ion-icon>
			</div>
			<div>
				<ion-icon name="bookmark-outline"></ion-icon>
			</div>
		</div>
	);
}