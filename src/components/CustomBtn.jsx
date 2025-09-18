const customBtn = {
	backgroundColor: "grey",
	border: "none",
	color: "#fff",
	fontSize: "19px",
	padding: "15px 30px",
	textAlign: "center",
	textDecoration: "none",
	borderRadius: "7px",
	display: "inline-block",
	margin: "5px auto",
	cursor: "pointer",
};
const CustomBtn = ({ children, style }) => (
	<button style={{ ...customBtn, ...style }}>{children}</button>
);

export default CustomBtn;
