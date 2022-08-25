import { useContext } from "react";
import { ExchangeContext } from "../../contexts/exchange.context";
import ExchangeDisplay from "../../displays/exchange-display/exchange-display.component";
import LoadingWrapper from "../loading-wrapper/loading-wrapper.hoc";

const ExchangeDisplayContainer = () => {
	const { exchangeLoading } = useContext(ExchangeContext);

	return (
		<LoadingWrapper loading={exchangeLoading}>
			<ExchangeDisplay />
		</LoadingWrapper>
	);
};

export default ExchangeDisplayContainer;
