import "./App.scss";
import { useEffect, useState, useContext } from "react";
import Header from "./displays/header/header.component";
import NavigationContainer from "./navigation/navigation.nav";
import { CardDataContext } from "./contexts/card-data.context";

function App() {
	const [filteredCryptos, setFilteredCryptos] = useState([]);
	const [searchField, setSearchField] = useState("");

	const { cryptoCardData, cardDataLoading } = useContext(CardDataContext);

	// SEARCH AND DISPLAY CRYPTOS
	useEffect(() => {
		const newFilteredCryptos = cryptoCardData.filter((crypto) => {
			return crypto.name.toLowerCase().includes(searchField);
		});
		return setFilteredCryptos(newFilteredCryptos);
	}, [cryptoCardData, searchField]);

	const onSearchChange = (event) => {
		setSearchField(event.target.value.toLowerCase());
	};

	// SORT FUNCTIONS
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

	return (
		<div className="app">
			<Header
				onChangeHandler={onSearchChange}
				sortByDailyVolume={sortByDailyVolume}
				sortByPrice={sortByPrice}
				placeholder="Search"
				className="cryptos-search-box"
			/>
			<NavigationContainer
				filteredCryptos={filteredCryptos}
				loading={cardDataLoading}
				searchField={searchField}
			/>
		</div>
	);
}

export default App;
