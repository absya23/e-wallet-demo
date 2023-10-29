import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../src/constants";

import { windowWidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: COLORS.white,
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		paddingTop: 20,
	},
	logo: {
		width: windowWidth / 10,
		height: windowWidth / 5,
		resizeMode: "contain",
	},
	image: {
		width: (windowWidth * 2) / 3,
		height: windowWidth / 2,
		resizeMode: "contain",
	},
	textContainer: {
		marginTop: 20,
		marginRight: 30,
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "flex-start",
		alignSelf: "stretch",
	},
	bgBox: {
		flex: 1,
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		resizeMode: "contain",
		alignItems: "flex-start",
		position: "absolute",
		right: 0,
		top: 0,
	},
	textBox: {
		paddingLeft: 30,
		maxWidth: (windowWidth * 3) / 3,
	},
	title: {
		fontSize: 24,
		color: COLORS.primary,
		marginBottom: 10,
	},
	description: {
		fontSize: 18,
		color: COLORS.secondary,
	},
	userName: {
		fontFamily: FONT.regular,
		fontSize: SIZES.large,
		color: COLORS.secondary,
	},
	welcomeMessage: {
		fontFamily: FONT.bold,
		fontSize: SIZES.xLarge,
		color: COLORS.primary,
		marginTop: 2,
	},
	button: {
		width: "100%",
		backgroundColor: COLORS.primary,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 25,
		borderRadius: 20,
		padding: 14,
	},
});

export default styles;
