import { createContext, useState } from "react";

export const FavoritesContext = createContext({
	favorites: {},
	setFavorites: () => [],
	addCryptoToFavorites: () => [],
	displayFavorites: false,
	setDisplayFavorites: () => [],
});

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);
	const [displayFavorites, setDisplayFavorites] = useState(false);

	console.log(displayFavorites);

	const addCryptoToFavorites = (assetId) => {
		setFavorites((prevFavorites) => [...prevFavorites, assetId]);
	};

	const removeCryptoFromFavorites = (assetId) => {
		setFavorites((prevFavorites) => {
			const newFavorites = prevFavorites.filter(
				(favorite) => assetId !== favorite
			);
			console.log(newFavorites);
			return newFavorites;
		});
	};

	const value = {
		favorites,
		setFavorites,
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
