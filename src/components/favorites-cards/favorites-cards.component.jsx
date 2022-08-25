import { useContext } from "react";
import { FavoritesContext } from "../../contexts/favorites.context";
import { CardDataContext } from "../../contexts/card-data.context";
import { UtilityContext } from "../../contexts/utility.context";
import AssetCard from "../asset-card/asset-card.component";
const FavoritesCards = () => {
	const { favorites } = useContext(FavoritesContext);
	const { cryptoCardData } = useContext(CardDataContext);
	const { filteredCryptos } = useContext(UtilityContext);

	const filterFavorites = () => {
		const favoritesArray = favorites.map((favorite) => {
			return cryptoCardData.find((crypto) => crypto.asset_id === favorite);
		});
		return filteredCryptos(favoritesArray);
	};

	const filteredFavorites = filterFavorites();

	return filteredFavorites.map((favorite) => {
		const { asset_id } = favorite;
		return (
			<AssetCard
				key={asset_id}
				asset_id={asset_id}
				size="regular"
				{...favorite}
			/>
		);
	});
};

export default FavoritesCards;
