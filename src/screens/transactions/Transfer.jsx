import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TextInput,
	View,
} from "react-native";
import { COLORS, SIZES, images } from "../../constants";
import { MyButton2, MyInputDismissKeyboard, MyText } from "../../components";
import styles from "./transfer.style";
import { windowHeight, windowWidth } from "../../utils/dimensions";

const Transfer = ({ navigation }) => {
	const [amount, setAmout] = useState(null);
	const [message, setMessage] = useState(null);
	let avtReceiver = images.avatar;
	const handleTransfer = () => {
		navigation.navigate("Confirmation");
	};
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<MyInputDismissKeyboard>
				<View style={styles.container}>
					<LinearGradient
						colors={[COLORS.primary, COLORS.secondary]}
						start={{ x: 0, y: 0 }}
						end={{ x: -0.5, y: 1 }}
						style={styles.topBg}
					>
						<View style={styles.topNav}>
							<MyText style={styles.text} weight={700}>
								CHUYỂN TIỀN
							</MyText>
						</View>
					</LinearGradient>
					<View style={styles.box}>
						<View style={styles.boxContent}>
							<View style={{ alignItems: "center", justifyContent: "center" }}>
								<MyText style={{ fontSize: SIZES.medium, color: COLORS.text }}>
									Nhập số tiền:
								</MyText>
								<TextInput
									style={styles.input}
									keyboardType="numeric"
									value={amount}
									onChangeText={(text) => setAmout(text)}
									placeholder="0"
								/>
							</View>
						</View>
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<MyText style={{ fontSize: SIZES.medium, color: COLORS.text }}>
								Đến
							</MyText>
							<Image
								source={avtReceiver}
								style={{ ...styles.imgAvt, width: 60, height: 60 }}
							/>
						</View>
					</View>
					<View style={styles.box}>
						<MyText
							style={{
								fontSize: SIZES.medium,
								color: COLORS.text,
								marginBottom: 8,
							}}
						>
							Lời nhắn:
						</MyText>
						<ScrollView
							style={styles.boxMessage}
							keyboardShouldPersistTaps="handled"
						>
							<TextInput
								style={styles.inputMessage}
								value={message}
								onChangeText={(text) => setMessage(text)}
								placeholder="Nhập lời nhắn ..."
							/>
						</ScrollView>
					</View>
					<View style={{ flex: 1, justifyContent: "flex-end" }}>
						<MyButton2
							style={{
								width: (windowWidth * 4) / 5,
								height: windowHeight / 10,
								marginBottom: 50,
							}}
							onPress={handleTransfer}
						>
							<MyText style={{ color: COLORS.white, fontSize: SIZES.large }}>
								Chuyển tiền
							</MyText>
						</MyButton2>
					</View>
				</View>
			</MyInputDismissKeyboard>
		</KeyboardAvoidingView>
	);
};

export default Transfer;
