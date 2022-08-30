import AssetCard from "../asset-card/asset-card.component";
const FavoritesCards = ({ filteredCryptos }) => {
	return filteredCryptos.map((crypto) => {
		const { asset_id, favorite } = crypto;
		crypto.size = "regular";
		return (
			<AssetCard
				key={asset_id}
				asset_id={asset_id}
				favorite={favorite}
				{...crypto}
			/>
		);
	});
};

export default FavoritesCards;
