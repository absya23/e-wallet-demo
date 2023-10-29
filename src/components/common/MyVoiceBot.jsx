import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MyVoiceBot = ({ params }) => (
	<TouchableOpacity
		style={{
			position: "absolute",
			bottom: 340,
			right: 10,
			width: 100,
			height: 100,
			zIndex: 1000,
			backgroundColor: COLORS.secondary,
			borderRadius: 100,
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		<View
			style={{
				width: 80,
				height: 80,
				backgroundColor: COLORS.primary,
				borderRadius: 100,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<MaterialCommunityIcons
				name="microphone-outline"
				color={COLORS.white}
				size={60}
			/>
		</View>
	</TouchableOpacity>
);

export default MyVoiceBot;
