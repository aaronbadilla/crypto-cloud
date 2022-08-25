import React from "react";
import "./mobile-menu-icon.styles.scss";

const MobileMenuIcon = ({ handleClick }) => (
	<button
		type="button"
		aria-label="Display menu"
		className="mobile-menu"
		onClick={handleClick}
	>
		<span className="line" />
		<span className="line" />
		<span className="line" />
	</button>
);

export default MobileMenuIcon;
