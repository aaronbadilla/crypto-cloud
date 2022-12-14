import "./asset-card.styles.scss";
import { useState, useContext, useEffect } from "react";
import { NavigationContext } from "../../contexts/navigation.context";
import { ExchangeContext } from "../../contexts/exchange.context";
import { FavoritesContext } from "../../contexts/favorites.context";
import { UtilityContext } from "../../contexts/utility.context";

const AssetCard = ({ favorite, ...cardAttributes }) => {
	const { name, imageUrl, price_usd, volume_1day_usd, asset_id, size } =
		cardAttributes;

	const { createExchange, setExchangeBase, setExchangeLoading } =
		useContext(ExchangeContext);
	const { addCryptoToFavorites, removeCryptoFromFavorites } =
		useContext(FavoritesContext);
	const { setSearchField } = useContext(UtilityContext);
	const { openDisplayExchange } = useContext(NavigationContext);
	const [drawer, setDrawer] = useState(false);
	const [liked, setLiked] = useState(false);

	const shortPriceWithCommas = (priceUSD) => {
		if (priceUSD === undefined) {
			return "No price available";
		}
		return `$${price_usd
			.toFixed(2)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
	};

	const abbreviateNumber = new Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1,
	}).format(volume_1day_usd);

	useEffect(() => {
		if (favorite) {
			return setLiked(true);
		} else setLiked(false);
	}, [favorite]);

	const handleClick = () => {
		setDrawer(drawer ? false : true);
	};

	const handleExchangeClick = async () => {
		setSearchField("");
		await setExchangeLoading(true);
		await setExchangeBase(cardAttributes);
		await openDisplayExchange();
		await createExchange(cardAttributes);
		setExchangeLoading(false);
	};

	const handleFavoriteClick = () => {
		if (!liked) {
			return addCryptoToFavorites(cardAttributes);
		}
		if (liked) {
			return removeCryptoFromFavorites(asset_id);
		}
	};

	return (
		<div className="asset-card">
			<div className="title-container">
				<h1 title={name} className="crypto-name">
					{name}
				</h1>
			</div>
			<div className={`image-container ${size}`} onClick={handleClick}>
				{imageUrl ? (
					<img src={imageUrl} alt={name} />
				) : (
					<div className="no-image">
						<p>{name?.charAt(0)}</p>
					</div>
				)}
			</div>
			{drawer ? (
				<div className="info-container">
					<button
						type="button"
						aria-label="Add to favorites"
						className="like-button-container"
						onClick={handleFavoriteClick}
					>
						<div className={`like-button ${liked ? "liked" : "not-liked"}`}>
							&hearts;
						</div>
					</button>
					<p className="category">Price (USD):</p>
					<p className="value">{shortPriceWithCommas(price_usd)}</p>
					<p className="category">Daily Volume(USD):</p>
					<p className="value">${abbreviateNumber}</p>
					<button
						type="button"
						className="get-exchange-rates"
						aria-label="get exchange rates"
						onClick={handleExchangeClick}
					>
						<div className="exchange-rates">Get Exchange Rates</div>
					</button>
				</div>
			) : null}
		</div>
	);
};

export default AssetCard;
