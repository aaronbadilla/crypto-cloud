import { useContext } from "react";
import { UtilityContext } from "../../contexts/utility.context";
import "./search-box.styles.scss";

const SearchBox = ({ placeholder }) => {
	const { onSearchChange, searchField } = useContext(UtilityContext);

	return (
		<input
			className="search-box"
			type="search"
			placeholder={placeholder}
			onChange={onSearchChange}
			value={searchField}
		/>
	);
};

export default SearchBox;
