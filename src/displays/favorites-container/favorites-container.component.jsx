import "./favorites-container.styles.scss";
import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../../contexts/navigation.context";
import { UtilityContext } from "../../contexts/utility.context";
import { FavoritesContext } from "../../contexts/favorites.context";
import CloseButton from "../../components/close-button/close-button.component";
import FavoritesCards from "../../components/favorites-cards/favorites-cards.component";
import LoadMoreButton from "../../components/load-more-button/load-more-button.component";
import AssetCard from "../../components/asset-card/asset-card.component";
import TopMobileMenu from "../../components/top-mobile-menu/top-mobile-menu.component";
import BottomMobileMenu from "../../components/bottom-mobile-menu/bottom-mobile-menu.component";

const startingDisplay = 20;

const FavoritesContainer = () => {
	const [displayLimiter, setDisplayLimiter] = useState(startingDisplay);
	const { closeDisplayFavorites } = useContext(NavigationContext);
	const { filteredCryptos, searchCryptos, searchField } =
		useContext(UtilityContext);
	const { favorites } = useContext(FavoritesContext);

	useEffect(() => {
		searchCryptos(favorites);
	}, [favorites, searchField]);

	const handleLoadClick = () => {
		setDisplayLimiter(
			(prevDisplayNumber) => prevDisplayNumber + startingDisplay
		);
	};

	return (
		<div className="favorites-container">
			<TopMobileMenu />
			<div className="favorites-menu">
				<CloseButton
					name="close favorites"
					handleClose={closeDisplayFavorites}
				/>
			</div>
			<div className="favorites-cards">
				{favorites.length === 0 ? (
					<h1 className="empty-message">No favorites added yet!</h1>
				) : (
					filteredCryptos
						.filter((_, index) => index < displayLimiter)
						.map((crypto) => {
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
						})
				)}
			</div>
			{favorites.length === 0 ? null : (
				<LoadMoreButton handleLoadClick={handleLoadClick} />
			)}
			<BottomMobileMenu />
		</div>
	);
};

export default FavoritesContainer;
