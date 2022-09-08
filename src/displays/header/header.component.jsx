import "./header.styles.scss";
import SearchBox from "../../components/search-box/search-box.component";
import MobileMenuIcon from "../../components/mobile-menu-icon/mobile-menu-icon.component";
import DropDownMenu from "../../components/drop-down-menu/drop-down-menu.component";
import MenuButton from "../../components/menu-button/menu-button.component";
import { NavigationContext } from "../../contexts/navigation.context";
import { UtilityContext } from "../../contexts/utility.context";
import { useState, useContext } from "react";
import { FavoritesContext } from "../../contexts/favorites.context";

const Header = ({ ...otherProps }) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { openDisplayFavorites } = useContext(NavigationContext);
	const { sortByDailyVolume, sortByPrice, searchCryptos } =
		useContext(UtilityContext);
	const { favorites } = useContext(FavoritesContext);

	const handleMenuToggle = () => {
		setToggleMenu(toggleMenu ? false : true);
	};

	const toggleFavorites = async () => {
		await searchCryptos(favorites);
		openDisplayFavorites();
	};

	return (
		<div className="header">
			<div className="site-name-container">
				<h1 className="site-name">CryptoCloud</h1>
			</div>
			<>
				{toggleMenu ? (
					<DropDownMenu
						sortByDailyVolume={sortByDailyVolume}
						sortByPrice={sortByPrice}
						{...otherProps}
					/>
				) : null}
				<MobileMenuIcon handleClick={handleMenuToggle} />
				<div className="utilities-container">
					<MenuButton
						onClickHandler={sortByDailyVolume}
						aria="Sort By Volume"
						text="Sort By Volume"
					/>
					<MenuButton
						onClickHandler={sortByPrice}
						aria="Sort By Price"
						text="Sort By Price"
					/>
					<MenuButton
						onClickHandler={toggleFavorites}
						text="Favorites"
						aria-label="Go To Favorites"
					/>
					<SearchBox placeholder="Search" />
				</div>
			</>
		</div>
	);
};

export default Header;
