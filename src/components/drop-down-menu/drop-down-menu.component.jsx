import React from "react";
import SearchBox from "../search-box/search-box.component";
import MenuButton from "../menu-button/menu-button.component";
import "./drop-down-menu.styles.scss";

const DropDownMenu = ({ sortByDailyVolume, sortByPrice, ...otherProps }) => (
	<div className="dropdown-menu">
		<SearchBox {...otherProps} />
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
		<MenuButton text="Favorites" aria-label="Go To Favorites" />
	</div>
);

export default DropDownMenu;
