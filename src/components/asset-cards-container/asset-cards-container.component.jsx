import { useState, useEffect, useContext } from "react";
import { UtilityContext } from "../../contexts/utility.context";
import { CardDataContext } from "../../contexts/card-data.context";
import { FavoritesContext } from "../../contexts/favorites.context";
import "./asset-cards-container.styles.scss";
import AssetCard from "../asset-card/asset-card.component";
import LoadingWrapper from "../loading-wrapper/loading-wrapper.hoc";
import LoadMoreButton from "../load-more-button/load-more-button.component";
import TopMobileMenu from "../top-mobile-menu/top-mobile-menu.component";
import BottomMobileMenu from "../bottom-mobile-menu/bottom-mobile-menu.component";

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
			<TopMobileMenu />
			<LoadingWrapper loading={loading} cardAmount={20}>
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
				<LoadMoreButton handleLoadClick={handleLoadClick} />
			</LoadingWrapper>
			<BottomMobileMenu />
		</div>
	);
};

export default AssetCardsContainer;
