import "./exchange-display.styles.scss";
import { useContext, useState, useEffect } from "react";
import { ExchangeContext } from "../../contexts/exchange.context";
import { CardDataContext } from "../../contexts/card-data.context";
import { NavigationContext } from "../../contexts/navigation.context";
import { UtilityContext } from "../../contexts/utility.context";
import AssetCard from "../../components/asset-card/asset-card.component";
import ExchangeCards from "../../components/exchange-cards/exchange-cards.component";
import LoadingWrapper from "../../components/loading-wrapper/loading-wrapper.hoc";
import CloseButton from "../../components/close-button/close-button.component";
import { FavoritesContext } from "../../contexts/favorites.context";

const startingRateMin = 0;
const startingRateMax = 3;

const ExchangeDisplay = () => {
	const [noRates, setNoRates] = useState(false);
	const [rateMin, setRateMin] = useState(0);
	const [rateMax, setRateMax] = useState(3);
	const [mappedRateData, setMappedRateData] = useState([]);
	const { exchangeRates, exchangeBase, exchangeLoading } =
		useContext(ExchangeContext);
	const { cryptoCardData } = useContext(CardDataContext);
	const { closeDisplayExchange } = useContext(NavigationContext);
	const { filteredCryptos, searchField, searchCryptos } =
		useContext(UtilityContext);
	const { favoritesIds } = useContext(FavoritesContext);

	useEffect(() => {
		setRateMin(startingRateMin);
		setRateMax(startingRateMax);
	}, [searchField]);

	// create new data object to map onto cards
	useEffect(() => {
		if (!exchangeLoading) {
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
		}
	}, [cryptoCardData, exchangeRates, exchangeLoading]);

	useEffect(() => {
		if (!exchangeLoading) {
			searchCryptos(mappedRateData);
		}
	}, [mappedRateData, searchField, exchangeRates]);

	// display message if there are no rates
	useEffect(() => {
		if (filteredCryptos.length === 0) {
			setNoRates(true);
		} else {
			setNoRates(false);
		}
	}, [filteredCryptos]);

	// Close exchange display
	const handleCloseExchange = () => {
		closeDisplayExchange();
	};

	// cycle through crypto rates
	const handleLoadClick = () => {
		setRateMin((prevRate) => prevRate + 4);
		setRateMax((prevRate) => prevRate + 4);
	};

	return (
		<>
			<div className="exchange-container">
				<div className="exchange-utility-container">
					<div className="utility-container">
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
					<AssetCard
						size="regular"
						favorite={favoritesIds.includes(exchangeBase.asset_id)}
						{...exchangeBase}
					/>
				</div>
				<div className="equals-container">
					<h1 className="equals">=</h1>
				</div>
				<div className="exchanged-crypto-container">
					{noRates ? (
						<div className="no-rates-message-container">
							<h1 className="no-rates-message">No rates available</h1>
						</div>
					) : (
						<LoadingWrapper loading={exchangeLoading} cardAmount={4}>
							<ExchangeCards
								filteredCryptos={filteredCryptos}
								rateMax={rateMax}
								rateMin={rateMin}
								favoritesIds={favoritesIds}
							/>
						</LoadingWrapper>
					)}
				</div>
			</div>
		</>
	);
};

export default ExchangeDisplay;
