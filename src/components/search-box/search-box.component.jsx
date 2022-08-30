import { useContext } from "react";
import { UtilityContext } from "../../contexts/utility.context";
import "./search-box.styles.scss";

const SearchBox = ({ placeholder }) => {
	const { onSearchChange } = useContext(UtilityContext);

	return (
		<input
			className="search-box"
			type="search"
			placeholder={placeholder}
			onChange={onSearchChange}
		/>
	);
};

export default SearchBox;
