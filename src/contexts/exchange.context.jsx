import { createContext, useState, useEffect } from "react";
import { getCryptoData } from "../api";

export const ExchangeContext = createContext({
	exchangeRates: {},
	exchangeLoading: true,
	getExchangeRate: () => {},
	setExchangeRates: () => {},
});

export const ExchangeProvider = ({ children }) => {
	const [exchangeBase, setExchangeBase] = useState(null);
	const [exchangeRates, setExchangeRates] = useState({});
	const [exchangeLoading, setExchangeLoading] = useState(true);
	const [exchangeError, setExchangeError] = useState(false);

	const getExchangeRates = async (asset_id) => {
		const exchangeData = await getCryptoData(`v1/exchangerate/${asset_id}`);
		await setExchangeRates(exchangeData);
	};

	const createExchange = async (cardAttributes) => {
		const asset_id = cardAttributes.asset_id;
		await getExchangeRates(asset_id);
	};

	const value = {
		createExchange,
		exchangeRates,
		setExchangeRates,
		exchangeLoading,
		setExchangeLoading,
		setExchangeBase,
		exchangeBase,
	};

	return (
		<ExchangeContext.Provider value={value}>
			{children}
		</ExchangeContext.Provider>
	);
};
