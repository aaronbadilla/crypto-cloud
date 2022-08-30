import { useContext } from "react";
import SearchBox from "../search-box/search-box.component";
import MenuButton from "../menu-button/menu-button.component";
import { UtilityContext } from "../../contexts/utility.context";
import { FavoritesContext } from "../../contexts/favorites.context";
import { NavigationContext } from "../../contexts/navigation.context";
import "./drop-down-menu.styles.scss";

const DropDownMenu = () => {
	const { searchCryptos, sortByDailyVolume, sortByPrice } =
		useContext(UtilityContext);
	const { favorites } = useContext(FavoritesContext);
	const { openDisplayFavorites } = useContext(NavigationContext);

	const handleToggleFavorites = async () => {
		await searchCryptos(favorites);
		openDisplayFavorites();
	};

	return (
		<div className="dropdown-menu">
			<SearchBox placeholder="Search" />
			<MenuButton
				text="Sort By Price"
				aria-label="Sort By Price"
				onClickHandler={sortByPrice}
			/>
			<MenuButton
				text="Sort By Volume"
				aria-label="Sort By Volume"
				onClickHandler={sortByDailyVolume}
			/>
			<MenuButton
				text="Favorites"
				aria-label="Go To Favorites"
				onClickHandler={handleToggleFavorites}
			/>
		</div>
	);
};

export default DropDownMenu;
