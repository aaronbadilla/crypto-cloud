import "./header.styles.scss";
import SearchBox from "../../components/search-box/search-box.component";
import MobileMenuIcon from "../../components/mobile-menu-icon/mobile-menu-icon.component";
import DropDownMenu from "../../components/drop-down-menu/drop-down-menu.component";
import MenuButton from "../../components/menu-button/menu-button.component";
import { NavigationContext } from "../../contexts/navigation.context";
import { useState, useContext } from "react";

const Header = ({ sortByDailyVolume, sortByPrice, ...otherProps }) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { openDisplayFavorites } = useContext(NavigationContext);

	const handleMenuToggle = () => {
		setToggleMenu(toggleMenu ? false : true);
	};

	const toggleFavorites = () => {
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
					<SearchBox {...otherProps} />
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
				</div>
			</>
		</div>
	);
};

export default Header;
