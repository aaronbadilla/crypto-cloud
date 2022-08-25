import "./exchange-display.styles.scss";
import { useContext, useState, useEffect } from "react";
import { ExchangeContext } from "../../contexts/exchange.context";
import { CardDataContext } from "../../contexts/card-data.context";
import { NavigationContext } from "../../contexts/navigation.context";
import AssetCard from "../../components/asset-card/asset-card.component";
import SearchBox from "../../components/search-box/search-box.component";
import LoadingWrapperCard from "../../components/loading-wrapper/loading-wrapper-card.hoc";
import CloseButton from "../../components/close-button/close-button.component";

const ExchangeDisplay = () => {
	const [cryptoToExchange, setCryptoToExchange] = useState({});
	const [rateMin, setRateMin] = useState(0);
	const [rateMax, setRateMax] = useState(3);
	const [ratesSearchField, setRatesSearchField] = useState("");
	const [filteredRates, setFilteredRates] = useState([]);
	const [mappedRateData, setMappedRateData] = useState([]);
	const { exchangeRates, exchangeLoading, setExchangeLoading } =
		useContext(ExchangeContext);
	const { cryptoCardData } = useContext(CardDataContext);
	const { closeDisplayExchange } = useContext(NavigationContext);

	useEffect(() => {
		const newCryptoToExchange = cryptoCardData.find(
			(crypto) => exchangeRates.asset_id_base === crypto.asset_id
		);
		setRateMin(0);
		setRateMax(3);
		setCryptoToExchange(newCryptoToExchange);
	}, [exchangeRates, cryptoCardData]);

	// Format exchange rate numbers
	const shortPriceWithCommas = (priceUSD) => {
		if (!priceUSD) {
			return "No price available";
		}
		if (priceUSD < 1) {
			return `${priceUSD.toFixed(9)}`;
		}
		return `${priceUSD
			.toFixed(2)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
	};

	useEffect(() => {
		setCryptoToExchange(
			cryptoCardData.find(
				(crypto) => crypto.asset_id === exchangeRates.asset_id_base
			)
		);
	}, [cryptoCardData, exchangeRates]);

	// create new data object to map onto cards
	useEffect(() => {
		const newMappedRateData = cryptoCardData.map((crypto) => {
			const exchangeRate = exchangeRates.rates.find(
				(rate) => rate.asset_id_quote === crypto.asset_id
			);
			if (exchangeRate === undefined) {
				return null;
			}
			return { ...crypto, rate: exchangeRate.rate };
		});
		const filteredNewMappedRateData = newMappedRateData.filter(
			(rate) => rate !== null
		);
		setMappedRateData(filteredNewMappedRateData);
	}, [cryptoCardData, exchangeRates]);

	// search crypto rates
	useEffect(() => {
		const newFilteredRates = mappedRateData.filter((crypto) =>
			crypto.name.toLowerCase().includes(ratesSearchField)
		);
		console.log(mappedRateData);
		setFilteredRates(newFilteredRates);
	}, [mappedRateData, ratesSearchField, exchangeRates]);

	const onSearchChange = (event) => {
		setRatesSearchField(event.target.value.toLowerCase());
	};

	// Close exchange display
	const handleCloseExchange = () => {
		closeDisplayExchange();
	};

	// cycle through crypto rates
	const handleLoadClick = () => {
		setRateMin((prevRate) => prevRate + 4);
		setRateMax((prevRate) => prevRate + 4);
	};

	// toggle loading
	useEffect(() => {
		if (filteredRates.length > 0) {
			setExchangeLoading(false);
		}
	}, [filteredRates]);

	return (
		<>
			<div className="exchange-container">
				<div className="exchange-utility-container">
					<div className="utility-container">
						<SearchBox
							placeholder="Search Rates"
							className="rate-search"
							onChangeHandler={onSearchChange}
						/>
						<button
							type="button"
							aria-label="get more exchange rates"
							onClick={handleLoadClick}
							className="load-more-rates"
						>
							LOAD MORE
						</button>
					</div>
					<CloseButton name="exchange" handleClose={handleCloseExchange} />
				</div>
				<div className="crypto-to-exchange">
					<h1>1</h1>
					<LoadingWrapperCard loading={exchangeLoading}>
						<AssetCard size="regular" {...cryptoToExchange} />
					</LoadingWrapperCard>
				</div>
				<div className="equals-container">
					<h1 className="equals">=</h1>
				</div>
				<div className="exchanged-crypto-container">
					{filteredRates
						.filter((_, index) => index <= rateMax && index >= rateMin)
						.map(({ rate, asset_id, ...cardAttributes }) => (
							<div key={asset_id} className="exchanged-crypto">
								<h3>{shortPriceWithCommas(rate)}</h3>
								<AssetCard
									size="small"
									asset_id={asset_id}
									{...cardAttributes}
								/>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default ExchangeDisplay;
