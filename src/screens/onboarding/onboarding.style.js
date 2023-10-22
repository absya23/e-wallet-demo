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
	searchContainer: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginTop: SIZES.large,
		height: 50,
	},
	searchWrapper: {
		flex: 1,
		backgroundColor: COLORS.white,
		marginRight: SIZES.small,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: SIZES.medium,
		height: "100%",
	},
	searchInput: {
		fontFamily: FONT.regular,
		width: "100%",
		height: "100%",
		paddingHorizontal: SIZES.medium,
	},
	searchBtn: {
		width: 50,
		height: "100%",
		backgroundColor: COLORS.tertiary,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	searchBtnImage: {
		width: "50%",
		height: "50%",
		tintColor: COLORS.white,
	},
	tabsContainer: {
		width: "100%",
		marginTop: SIZES.medium,
	},
	tab: (activeJobType, item) => ({
		paddingVertical: SIZES.small / 2,
		paddingHorizontal: SIZES.small,
		borderRadius: SIZES.medium,
		borderWidth: 1,
		borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
	}),
	tabText: (activeJobType, item) => ({
		fontFamily: FONT.medium,
		color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
	}),
});

export default styles;
