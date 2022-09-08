import "./bottom-mobile-menu.styles.scss";
import MenuButton from "../menu-button/menu-button.component";
import { useContext } from "react";
import { UtilityContext } from "../../contexts/utility.context";

const BottomMobileMenu = () => {
	const { sortByDailyVolume, sortByPrice } = useContext(UtilityContext);

	return (
		<div className="bottom-mobile-menu">
			<MenuButton
				onClickHandler={sortByPrice}
				aria="Sort By Price"
				text="Sort By Price"
			/>
			<MenuButton
				onClickHandler={sortByDailyVolume}
				aria="Sort By Volume"
				text="Sort By Volume"
			/>
		</div>
	);
};

export default BottomMobileMenu;
