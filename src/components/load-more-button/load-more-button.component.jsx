import "./load-more-button.styles.scss";

const LoadMoreButton = ({ handleLoadClick }) => {
	return (
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
	);
};

export default LoadMoreButton;
