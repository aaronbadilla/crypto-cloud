import { useContext } from "react";
import { FavoritesContext } from "../../contexts/favorites.context";
import { CardDataContext } from "../../contexts/card-data.context";
import AssetCard from "../../components/asset-card/asset-card.component";
const Favorites = () => {
	const { favorites } = useContext(FavoritesContext);
	const { cryptoCardData } = useContext(CardDataContext);

	return favorites.map((favorite) => {
		const cardData = cryptoCardData.find(
			(crypto) => favorite === crypto.asset_id
		);
		const { asset_id } = cardData;
		if (favorite) {
			return (
				<AssetCard
					key={asset_id}
					asset_id={asset_id}
					size="regular"
					{...cardData}
				/>
			);
		}
	});
};

export default Favorites;
