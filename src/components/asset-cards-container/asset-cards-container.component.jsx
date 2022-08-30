import { useState, useEffect, useContext, useCallback } from "react";
import { UtilityContext } from "../../contexts/utility.context";
import { CardDataContext } from "../../contexts/card-data.context";
import { FavoritesContext } from "../../contexts/favorites.context";
import "./asset-cards-container.styles.scss";
import AssetCard from "../asset-card/asset-card.component";
import LoadingWrapper from "../loading-wrapper/loading-wrapper.hoc";

const startingDisplay = 20;

const AssetCardsContainer = ({ loading }) => {
	const [displayLimiter, setDisplayLimiter] = useState(startingDisplay);
	const { searchCryptos, filteredCryptos, searchField } =
		useContext(UtilityContext);
	const { cryptoCardData } = useContext(CardDataContext);
	const { favoritesIds } = useContext(FavoritesContext);
	const handleLoadClick = () => {
		setDisplayLimiter(
			(prevDisplayNumber) => prevDisplayNumber + startingDisplay
		);
	};

	useEffect(() => {
		setDisplayLimiter(startingDisplay);
	}, [searchField]);

	useEffect(() => {
		searchCryptos(cryptoCardData);
	}, [searchField, cryptoCardData]);

	return (
		<div className="asset-cards-container">
			<LoadingWrapper loading={loading}>
				{filteredCryptos
					.filter((_, index) => index < displayLimiter)
					.map(({ asset_id, ...otherProps }) => {
						const favorite = favoritesIds.includes(asset_id);
						return (
							<AssetCard
								key={asset_id}
								asset_id={asset_id}
								size="regular"
								favorite={favorite}
								{...otherProps}
							/>
						);
					})}
				<div className="button-container">
					<button
						type="button"
						className="load-more"
						aria-label="load more cryptos"
						onClick={handleLoadClick}
					>
						LOAD MORE
					</button>
				</div>
			</LoadingWrapper>
		</div>
	);
};

export default AssetCardsContainer;
