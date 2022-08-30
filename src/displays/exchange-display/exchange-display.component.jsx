import "./exchange-display.styles.scss";
import { useContext, useState, useEffect } from "react";
import { ExchangeContext } from "../../contexts/exchange.context";
import { CardDataContext } from "../../contexts/card-data.context";
import { NavigationContext } from "../../contexts/navigation.context";
import { UtilityContext } from "../../contexts/utility.context";
import AssetCard from "../../components/asset-card/asset-card.component";
import ExchangeCards from "../../components/exchange-cards/exchange-cards.component";
import LoadingWrapperCard from "../../components/loading-wrapper/loading-wrapper-card.hoc";
import CloseButton from "../../components/close-button/close-button.component";
import { FavoritesContext } from "../../contexts/favorites.context";

const ExchangeDisplay = () => {
	const [rateMin, setRateMin] = useState(0);
	const [rateMax, setRateMax] = useState(3);
	const [mappedRateData, setMappedRateData] = useState([]);
	const { exchangeRates, exchangeBase } = useContext(ExchangeContext);
	const { cryptoCardData } = useContext(CardDataContext);
	const { closeDisplayExchange } = useContext(NavigationContext);
	const { filteredCryptos, searchField, searchCryptos } =
		useContext(UtilityContext);
	const { favoritesIds } = useContext(FavoritesContext);

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

	useEffect(() => {
		searchCryptos(mappedRateData);
	}, [mappedRateData, searchField]);

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
				<ExchangeCards
					filteredCryptos={filteredCryptos}
					rateMax={rateMax}
					rateMin={rateMin}
					favoritesIds={favoritesIds}
				/>
			</div>
		</>
	);
};

export default ExchangeDisplay;
