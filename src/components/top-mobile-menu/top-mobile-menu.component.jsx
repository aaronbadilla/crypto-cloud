import "./top-mobile-menu.styles.scss";
import { useContext } from "react";
import SearchBox from "../search-box/search-box.component";
import MenuButton from "../menu-button/menu-button.component";
import { NavigationContext } from "../../contexts/navigation.context";

const TopMobileMenu = () => {
	const { openDisplayFavorites } = useContext(NavigationContext);
	return (
		<div className="top-mobile-menu">
			<SearchBox placeholder="Search" />
			<MenuButton
				onClickHandler={openDisplayFavorites}
				text="Favorites"
				aria-label="Go To Favorites"
			/>
		</div>
	);
};

export default TopMobileMenu;
