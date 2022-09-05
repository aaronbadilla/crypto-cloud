import { createContext, useState, useEffect, useMemo } from "react";
import { getCryptoData } from "../api";

export const CardDataContext = createContext({
	cryptoCardData: [],

	cardDataLoading: true,
});

export const CardDataProvider = ({ children }) => {
	const [cardDataLoading, setCardDataLoading] = useState(true);

	const [cryptoPrices, setCryptoPrices] = useState([]);
	const [cryptoIcons, setCryptoIcons] = useState([]);

	// RETRIEVE CRYPTO PRICE DATA & CATCH ERRORS
	const makeApiCalls = async () => {
		const priceData = await getCryptoData("v1/assets");
		const iconsData = await getCryptoData("v1/assets/icons/200x200");
		setCryptoPrices(priceData);
		setCryptoIcons(iconsData);
		setCardDataLoading(false);
	};

	// COMBINE PRICE AND ICON DATA TO DISPLAY IN CARD

	const cryptoCardData = useMemo(() => {
		return cryptoPrices
			.filter((crypto) => crypto.type_is_crypto)
			.map((crypto) => {
				const image = cryptoIcons.find(
					(icon) => icon.asset_id === crypto.asset_id
				);
				const cryptoPrice = () => {
					if (crypto.price_usd === undefined) {
						return 0;
					}
					return crypto.price_usd;
				};
				if (image === undefined) {
					return {
						...crypto,
						price_usd: cryptoPrice(),
					};
				}
				return {
					...crypto,
					imageUrl: image.url,
					price_usd: cryptoPrice(),
				};
			});
	}, [cryptoPrices, cryptoIcons]);

	useEffect(() => {
		makeApiCalls();
	}, []);

	const value = { cryptoCardData, cardDataLoading };

	return (
		<CardDataContext.Provider value={value}>
			{children}
		</CardDataContext.Provider>
	);
};
