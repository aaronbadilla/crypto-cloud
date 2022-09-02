import "./App.scss";
import { useContext } from "react";
import Header from "./displays/header/header.component";
import NavigationContainer from "./navigation/navigation.nav";
import { CardDataContext } from "./contexts/card-data.context";

function App() {
	const { cardDataLoading } = useContext(CardDataContext);

	return (
		<div className="app">
			<Header />
			<NavigationContainer loading={cardDataLoading} />
		</div>
	);
}

export default App;
