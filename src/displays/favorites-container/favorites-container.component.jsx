import "./favorites-container.styles.scss";
import { useContext, useEffect } from "react";
import { NavigationContext } from "../../contexts/navigation.context";
import { UtilityContext } from "../../contexts/utility.context";
import { FavoritesContext } from "../../contexts/favorites.context";
import CloseButton from "../../components/close-button/close-button.component";
import FavoritesCards from "../../components/favorites-cards/favorites-cards.component";
const FavoritesContainer = () => {
	const { closeDisplayFavorites } = useContext(NavigationContext);
	const { filteredCryptos, searchCryptos, searchField } =
		useContext(UtilityContext);
	const { favorites } = useContext(FavoritesContext);

	useEffect(() => {
		searchCryptos(favorites);
	}, [favorites, searchField]);

	return (
		<div className="favorites-container">
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
					<FavoritesCards filteredCryptos={filteredCryptos} />
				)}
			</div>
		</div>
	);
};

export default FavoritesContainer;
