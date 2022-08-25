import "./menu-button.styles.scss";

const MenuButton = ({ onClickHandler, text, aria }) => {
	return (
		<button
			type="button"
			aria-label={aria}
			className="utility"
			onClick={onClickHandler}
		>
			<div className="utility-text">{text}</div>
		</button>
	);
};

export default MenuButton;
