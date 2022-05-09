import Logo from "./Conteiner/Logo";
import LogoMobile from "./Conteiner/LogoMobile";
import InstagramMobile from "./Conteiner/InstagramMobile";
import Pesquisa from "./Conteiner/Pesquisa";
import Icones from "./Conteiner/Icones";
import IconesMobile from "./Conteiner/IconesMobile";

export default function Container(){
	return(
		<div class="container">
			<Logo/>
			<LogoMobile/>
			<InstagramMobile/>
			<Pesquisa/>
			<Icones/>
			<IconesMobile/>
		</div>
	);
}