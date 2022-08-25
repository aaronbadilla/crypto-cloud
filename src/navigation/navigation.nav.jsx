import { useContext } from "react";
import { NavigationContext } from "../contexts/navigation.context";

import FavoritesContainer from "../displays/favorites/favorites-container.component";
import AssetCardsContainer from "../components/asset-cards-container/asset-cards-container.component";
import ExchangeDisplayContainer from "../components/exchange-display-container/exchange-display-container.component";

const NavigationContainer = (props) => {
	const { assetCardsDisplay, favoritesDisplay, exchangeDisplay } =
		useContext(NavigationContext);

	return (
		<>
			{assetCardsDisplay ? <AssetCardsContainer {...props} /> : null}
			{favoritesDisplay ? <FavoritesContainer /> : null}
			{exchangeDisplay ? <ExchangeDisplayContainer /> : null}
		</>
	);
};

export default NavigationContainer;
