import { createContext, useState } from "react";

export const FavoritesContext = createContext({
	favorites: [],
	setFavorites: () => [],
	addCryptoToFavorites: () => [],
	displayFavorites: false,
	setDisplayFavorites: () => [],
});

export const FavoritesProvider = ({ children }) => {
	const [favoritesLoading, setFavoritesLoading] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [displayFavorites, setDisplayFavorites] = useState(false);

	const addCryptoToFavorites = (cardAttributes) => {
		cardAttributes.favorite = true;
		setFavorites((prevFavorites) => [...prevFavorites, cardAttributes]);
	};

	const removeCryptoFromFavorites = (assetId) => {
		setFavorites((prevFavorites) => {
			const newFavorites = prevFavorites.filter(
				(favorite) => assetId !== favorite.asset_id
			);
			return newFavorites;
		});
	};

	const favoritesIds = favorites.map((favorite) => {
		return favorite.asset_id;
	});

	const value = {
		favorites,
		favoritesIds,
		favoritesLoading,
		setFavoritesLoading,
		addCryptoToFavorites,
		removeCryptoFromFavorites,
		displayFavorites,
		setDisplayFavorites,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
};
