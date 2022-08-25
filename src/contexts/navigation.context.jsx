import { createContext, useState } from "react";

export const NavigationContext = createContext({
	setAssetCardsDisplay: () => true,
	assetCardsDisplay: true,
	setFavoritesDisplay: () => false,
	favoritesDisplay: false,
	setExchangeDisplay: () => false,
	exchangeDisplay: false,
});

export const NavigationProvider = ({ children }) => {
	const [assetCardsDisplay, setAssetCardsDisplay] = useState(true);
	const [favoritesDisplay, setFavoritesDisplay] = useState(false);
	const [exchangeDisplay, setExchangeDisplay] = useState(false);

	const displayAssetCards = () => {
		setAssetCardsDisplay(true);
		setFavoritesDisplay(false);
		setExchangeDisplay(false);
	};

	const openDisplayExchange = () => {
		setAssetCardsDisplay(false);
		setFavoritesDisplay(false);
		setExchangeDisplay(true);
	};

	const closeDisplayExchange = () => {
		setAssetCardsDisplay(true);
		setFavoritesDisplay(false);
		setExchangeDisplay(false);
	};

	const openDisplayFavorites = () => {
		setAssetCardsDisplay(false);
		setFavoritesDisplay(true);
		setExchangeDisplay(false);
	};

	const closeDisplayFavorites = () => {
		setAssetCardsDisplay(true);
		setFavoritesDisplay(false);
		setExchangeDisplay(false);
	};

	const value = {
		assetCardsDisplay,
		favoritesDisplay,
		exchangeDisplay,
		displayAssetCards,
		openDisplayFavorites,
		closeDisplayFavorites,
		openDisplayExchange,
		closeDisplayExchange,
	};

	return (
		<NavigationContext.Provider value={value}>
			{children}
		</NavigationContext.Provider>
	);
};
