import { useContext } from "react";
import { NavigationContext } from "../../contexts/navigation.context";
import Favorites from "../../components/favorites/favorites.component";
import CloseButton from "../../components/close-button/close-button.component";
const FavoritesContainer = () => {
	const { closeDisplayFavorites } = useContext(NavigationContext);

	return (
		<div className="favorites-container">
			<div className="favorites-menu">
				<CloseButton
					name="close favorites"
					handleClose={closeDisplayFavorites}
				/>
			</div>
			<div className="favorites-cards">
				<Favorites />
			</div>
		</div>
	);
};

export default FavoritesContainer;
