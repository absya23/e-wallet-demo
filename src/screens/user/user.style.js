import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../src/constants";

import { windowWidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "contain",
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingHorizontal: 30,
		paddingBottom: 100,
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 20,
	},
	inputContainer: {
		width: "100%",
	},
	inputForm: {
		backgroundColor: COLORS.white,
		borderRadius: 0,
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		marginTop: 5,
		borderBottomWidth: 1,
		borderColor: COLORS.primary,
	},
	input: {
		width: "100%",
		paddingVertical: 10,
	},
	buttonContainer: {
		marginTop: 10,
		width: "100%",
		marginBottom: 20,
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 28,
		padding: 10,
		backgroundColor: COLORS.primary,
		marginTop: 5,
	},
	buttonOutlineText: {
		borderWidth: 1,
		borderColor: COLORS.primary,
		backgroundColor: COLORS.white,
	},
	registerGroup: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	register: {
		color: COLORS.primary,
		fontWeight: "bold",
		width: "100%",
		alignSelf: "stretch",
	},
});

export default styles;
