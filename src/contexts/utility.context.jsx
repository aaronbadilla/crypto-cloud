import { createContext, useState } from "react";

export const UtilityContext = createContext({
	filteredCryptos: () => [],
	onSearchChange: () => "",
});

export const UtilityProvider = ({ children }) => {
	const [searchField, setSearchField] = useState("");

	const filteredCryptos = (cryptosToSearch) => {
		const newFilteredCryptos = cryptosToSearch.filter((crypto) => {
			return crypto.name.toLowerCase().includes(searchField);
		});
		return newFilteredCryptos;
	};

	const onSearchChange = (event) => {
		setSearchField(event.target.value.toLowerCase());
	};

	const value = {
		filteredCryptos,
		onSearchChange,
	};

	return (
		<UtilityContext.Provider value={value}>{children}</UtilityContext.Provider>
	);
};
