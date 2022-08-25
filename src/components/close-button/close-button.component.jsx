import "./close-button.styles.scss";

const CloseButton = ({ handleClose, name }) => {
	return (
		<button
			type="button"
			aria-label={`close ${name} display`}
			onClick={handleClose}
			className="close-button"
		>
			X
		</button>
	);
};

export default CloseButton;
