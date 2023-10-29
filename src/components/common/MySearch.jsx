import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const MySearch = ({ navigation }) => (
	<View style={styles.textInputStyle}>
		<MaterialCommunityIcons name="magnify" color={COLORS.primary} size={26} />
		<TextInput
			style={styles.textInput}
			onChangeText={(text) => searchFilterFunction(text)}
			value={""}
			underlineColorAndroid="transparent"
			placeholder="Tìm kiếm người nhận ..."
		/>
	</View>
);

const styles = StyleSheet.create({
	textInputStyle: {
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: COLORS.primary,
		color: COLORS.text,
		fontSize: SIZES.medium,
		borderRadius: 30,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	textInput: {
		paddingVertical: 10,
		color: COLORS.text,
		fontSize: SIZES.medium,
		width: "100%",
		marginLeft: 10,
		borderWidth: 0,
		outlineStyle: "none",
	},
});

export default MySearch;
