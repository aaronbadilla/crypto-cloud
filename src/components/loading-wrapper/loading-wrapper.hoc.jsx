import "./loading-wrapper.styles.scss";

const LoadingWrapper = ({ loading, children }) => {
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
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
				<div className="loading-card">
					<div className="wrapper">
						<div className="loading-title animate"></div>
						<div className="loading-crypto-icon animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
						<div className="loading-info animate"></div>
					</div>
				</div>
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

export default LoadingWrapper;
