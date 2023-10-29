import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants";

const MyButton = ({ children, style = {}, onPress = () => {} }) => (
	<TouchableOpacity
		style={{
			...style,
			backgroundColor: COLORS.primary,
			shadowColor: COLORS.secondary,
			shadowOffset: {
				width: 0,
				height: 12,
			},
			shadowOpacity: 0.18,
			shadowRadius: 16,
			elevation: 100,
			borderRadius: 50,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			overflow: "hidden",
		}}
		onPress={() => onPress()}
	>
		{children}
		<View
			style={{
				width: "30%",
				flexDirection: "column",
				height: "100%",
				justifyContent: "flex-start",
			}}
		>
			<LinearGradient
				colors={["#C72FF8", "transparent"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ ...styles.btnImg, zIndex: 2, top: -138, left: -30 }}
			></LinearGradient>
			<LinearGradient
				colors={["#3AF9EF", "#5264F9"]}
				start={{ x: 0, y: 0 }}
				end={{ x: -0.5, y: 1 }}
				style={{ ...styles.btnImg, zIndex: 1, top: -160, left: -20 }}
			></LinearGradient>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	btnImg: { borderRadius: "100%", width: 200, height: 200 },
});

export default MyButton;

export const MyButton2 = ({ children, style = {}, onPress = () => {} }) => (
	<TouchableOpacity
		style={{
			...style,
			backgroundColor: COLORS.primary,
			shadowColor: COLORS.secondary,
			shadowOffset: {
				width: 0,
				height: 12,
			},
			shadowOpacity: 0.18,
			shadowRadius: 16,
			elevation: 100,
			borderRadius: 50,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			overflow: "hidden",
		}}
		onPress={() => onPress()}
	>
		<View
			style={{
				width: "15%",
				flexDirection: "column",
				height: "100%",
				justifyContent: "flex-start",
			}}
		>
			<LinearGradient
				colors={["#C72FF8", "transparent"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ ...styles.btnImg, zIndex: 2, top: -138, left: -80 }}
			></LinearGradient>
		</View>
		{children}
		<View
			style={{
				width: "15%",
				flexDirection: "column",
				height: "100%",
				justifyContent: "flex-start",
			}}
		>
			<LinearGradient
				colors={["#3AF9EF", "#5264F9"]}
				start={{ x: 0, y: 0 }}
				end={{ x: -0.5, y: 1 }}
				style={{ ...styles.btnImg, zIndex: 1, top: 20, left: -20 }}
			></LinearGradient>
		</View>
	</TouchableOpacity>
);
