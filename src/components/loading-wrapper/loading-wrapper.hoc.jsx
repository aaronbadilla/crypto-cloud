import "./loading-wrapper.styles.scss";

const LoadingWrapper = ({ loading, children, cardAmount }) => {
	if (loading) {
		var amountArray = [];
		for (let i = 0; i < cardAmount; i++) {
			amountArray.push(1);
		}
		return (
			<>
				{amountArray.map((amount) => (
					<div className="loading-card">
						<div className="wrapper">
							<div className="loading-title animate"></div>
							<div className="loading-crypto-icon animate"></div>
							<div className="loading-info animate"></div>
							<div className="loading-info animate"></div>
							<div className="loading-info animate"></div>
						</div>
					</div>
				))}
			</>
		);
	}
	return children;
};

export default LoadingWrapper;
