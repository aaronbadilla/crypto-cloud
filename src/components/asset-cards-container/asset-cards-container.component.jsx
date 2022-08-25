import { useState, useEffect, useContext } from "react";
import { UtilityContext } from "../../contexts/utility.context";
import { CardDataContext } from "../../contexts/card-data.context";
import "./asset-cards-container.styles.scss";
import AssetCard from "../asset-card/asset-card.component";
import LoadingWrapper from "../loading-wrapper/loading-wrapper.hoc";

const startingDisplay = 20;

const AssetCardsContainer = ({ loading, searchField }) => {
	const [displayLimiter, setDisplayLimiter] = useState(startingDisplay);
	const { filteredCryptos } = useContext(UtilityContext);
	const { cryptoCardData } = useContext(CardDataContext);

	const handleLoadClick = () => {
		setDisplayLimiter(
			(prevDisplayNumber) => prevDisplayNumber + startingDisplay
		);
	};

	useEffect(() => {
		setDisplayLimiter(startingDisplay);
	}, [searchField]);

	return (
		<div className="asset-cards-container">
			<LoadingWrapper loading={loading}>
				{filteredCryptos(cryptoCardData)
					.filter((_, index) => index < displayLimiter)
					.map(({ asset_id, ...otherProps }) => {
						return (
							<AssetCard
								key={asset_id}
								asset_id={asset_id}
								size="regular"
								{...otherProps}
							/>
						);
					})}
				<div className="button-container">
					<button
						type="button"
						className="load-more"
						aria-label="load more cryptos"
						onClick={handleLoadClick}
					>
						LOAD MORE
					</button>
				</div>
			</LoadingWrapper>
		</div>
	);
};

export default AssetCardsContainer;
