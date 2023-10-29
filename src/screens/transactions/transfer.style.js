import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
import { windowHeight, windowWidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
	container: {
		width: windowWidth,
		height: windowHeight,
		backgroundColor: COLORS.white,
		alignItems: "center",
	},
	searchGroup: {
		width: (windowWidth * 7) / 8,
		marginTop: 8,
	},
	boxList: {
		width: (windowWidth * 7) / 8,
		marginTop: 20,
	},
	boxUser: {
		width: (windowWidth * 7) / 8 / 5,
		alignItems: "center",
		marginRight: 20,
	},
	imgAvt: {
		width: "100%",
		height: (windowWidth * 7) / 8 / 5,
		borderRadius: 200,
		resizeMode: "cover",
		margin: 10,
	},

	text: {
		fontFamily: FONT.regular,
		fontSize: SIZES.large,
		color: COLORS.white,
		paddingVertical: 10,
	},

	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	//
	topBg: {
		width: windowWidth,
		height: windowHeight / 10,
		borderEndStartRadius: 80,
		borderEndEndRadius: 80,
		shadowColor: COLORS.blue,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 1,
		shadowRadius: 1,
		elevation: 100,
	},
	topNav: {
		width: windowWidth,
		height: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
		padding: 20,
	},
	box: {
		marginTop: 30,
		width: (windowWidth * 4) / 5,
	},
	boxContent: {
		width: (windowWidth * 4) / 5,
	},
	input: {
		width: "80%",
		margin: 12,
		borderWidth: 0,
		paddingVertical: 16,
		paddingBottom: 8,
		outlineStyle: "none",
		color: COLORS.gray,
		fontSize: 48,
		fontWeight: 700,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.primary,
		textAlign: "center",
	},
	boxMessage: {
		borderWidth: 1,
		borderColor: COLORS.secondary,
		borderRadius: 8,
		height: windowHeight / 5,
	},
	inputMessage: {
		width: "100%",
		height: "100%",
		borderWidth: 0,
		padding: 20,
		outlineStyle: "none",
		color: COLORS.gray,
		fontSize: SIZES.medium,
		fontWeight: 400,
		textAlign: "left",
	},
});

export default styles;
