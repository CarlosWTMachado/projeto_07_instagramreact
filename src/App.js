import FundoMobile from "./FundoMobile";
import Corpo from "./Corpo/Corpo";
import Navbar from "./Navbar/Navbar";

export default function App(){
	return(
		<div>
			<Navbar/>
			<Corpo/>
			<FundoMobile/>
		</div>
	);
}