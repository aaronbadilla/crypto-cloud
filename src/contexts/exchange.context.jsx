import { createContext, useState, useEffect } from "react";
import { getCryptoData } from "../api";

export const ExchangeContext = createContext({
	exchangeRates: {},
	getExchangeRate: () => {},
	setExchangeRates: () => {},
});

export const ExchangeProvider = ({ children }) => {
	const [assetId, setAssetId] = useState(null);
	const [exchangeRates, setExchangeRates] = useState({});
	const [exchangeLoading, setExchangeLoading] = useState(false);
	const [exchangeError, setExchangeError] = useState(false);

	const getExchangeRates = async (assetId) => {
		const exchangeData = await getCryptoData(`v1/exchangerate/${assetId}`);
		await setExchangeRates(exchangeData);
		setExchangeLoading(false);
	};

	const value = {
		exchangeRates,
		setExchangeRates,
		exchangeLoading,
		setExchangeLoading,
		setAssetId,
		assetId,
		getExchangeRates,
	};

	return (
		<ExchangeContext.Provider value={value}>
			{children}
		</ExchangeContext.Provider>
	);
};
