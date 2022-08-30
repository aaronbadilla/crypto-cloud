import { testCryptoPriceObject, testExchangeData } from "./mock-api";
import { testCryptoImageObject } from "./mock-api";

const useMock = true;

const baseUrl = `https://rest.coinapi.io/`;
const headers = {
	"X-CoinAPI-Key": process.env.REACT_APP_API_KEY,
};

export const getCryptoData = async (endpoint) => {
	if (useMock) {
		switch (true) {
			case /v1\/assets\/icons\/200x200/.test(endpoint):
				return testCryptoImageObject;
			case /v1\/assets/.test(endpoint):
				return testCryptoPriceObject;
			case /v1\/exchangerate/.test(endpoint): //any assetId will match
				return testExchangeData;
			default:
				return undefined;
		}
	}

	const url = new URL(endpoint, baseUrl);
	try {
		const response = await fetch(url.href, {
			headers,
		});
		if (!response.ok) {
			throw new Error(
				`This is an HTTP error: The status is ${response.status}`
			);
		}
		if (response.ok) {
			console.log("request successful");
		}
		const actualData = await response.json();
		return actualData;
	} catch (err) {
		return err.message || err;
	}
};
