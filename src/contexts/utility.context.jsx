import { createContext, useState } from "react";

export const UtilityContext = createContext({
	searchField: "",
	filteredCryptos: [],
	onSearchChange: () => "",
	searchCryptos: () => [],
});

export const UtilityProvider = ({ children }) => {
	const [searchField, setSearchField] = useState("");
	const [filteredCryptos, setFilteredCryptos] = useState([]);

	const searchCryptos = (cryptosToSearch) => {
		const newFilteredCryptos = cryptosToSearch.filter((crypto) => {
			return crypto.name.toLowerCase().includes(searchField);
		});
		setFilteredCryptos(newFilteredCryptos);
	};

	const onSearchChange = (event) => {
		setSearchField(event.target.value.toLowerCase());
	};

	const sortByDailyVolume = () => {
		setFilteredCryptos((prevFilteredCryptos) => {
			const cryptosToSort = [...prevFilteredCryptos];
			const sortArray = (crypto1, crypto2) => {
				if (crypto1.volume_1day_usd > crypto2.volume_1day_usd) return -1;
				if (crypto1.volume_1day_usd < crypto2.volume_1day_usd) return 1;
				return 0;
			};
			return cryptosToSort.sort(sortArray);
		});
	};

	const sortByPrice = () => {
		setFilteredCryptos((prevFilteredCryptos) => {
			const cryptosToSort = [...prevFilteredCryptos];
			const sortArray = (crypto1, crypto2) => {
				if (crypto1.price_usd > crypto2.price_usd) return -1;
				if (crypto1.price_usd < crypto2.price_usd) return 1;
				return 0;
			};
			return cryptosToSort.sort(sortArray);
		});
	};

	const value = {
		searchCryptos,
		filteredCryptos,
		onSearchChange,
		searchField,
		sortByDailyVolume,
		sortByPrice,
	};

	return (
		<UtilityContext.Provider value={value}>{children}</UtilityContext.Provider>
	);
};
