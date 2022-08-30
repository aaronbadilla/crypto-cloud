import AssetCard from "../asset-card/asset-card.component";

const ExchangeCards = ({ filteredCryptos, rateMax, rateMin, favoritesIds }) => {
	// Format exchange rate numbers
	const shortPriceWithCommas = (priceUSD) => {
		if (!priceUSD) {
			return "No price available";
		}
		if (priceUSD < 1) {
			return `${priceUSD.toFixed(9)}`;
		}
		return `${priceUSD
			.toFixed(2)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
	};
	return (
		<div className="exchanged-crypto-container">
			{filteredCryptos
				.filter((_, index) => index <= rateMax && index >= rateMin)
				.map(({ rate, asset_id, ...cardAttributes }) => {
					const favorite = favoritesIds.includes(asset_id);
					return (
						<div key={asset_id} className="exchanged-crypto">
							<h3>{shortPriceWithCommas(rate)}</h3>
							<AssetCard
								size="small"
								asset_id={asset_id}
								favorite={favorite}
								{...cardAttributes}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default ExchangeCards;
