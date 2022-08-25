import "./loading-wrapper.styles.scss";

const LoadingWrapperCard = ({ loading, children }) => {
	if (loading) {
		return (
			<>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
			</>
		);
	}
	return children;
};

export default LoadingWrapperCard;
