import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CardDataProvider } from "./contexts/card-data.context";
import { ExchangeProvider } from "./contexts/exchange.context";
import { FavoritesProvider } from "./contexts/favorites.context";
import { NavigationProvider } from "./contexts/navigation.context";
import { UtilityProvider } from "./contexts/utility.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<NavigationProvider>
		<CardDataProvider>
			<UtilityProvider>
				<ExchangeProvider>
					<FavoritesProvider>
						<App />
					</FavoritesProvider>
				</ExchangeProvider>
			</UtilityProvider>
		</CardDataProvider>
	</NavigationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
