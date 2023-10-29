import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { MyButton2, MyInputDismissKeyboard, MyText } from "../../components";
import { COLORS, SIZES } from "../../constants";
import styles from "./transfer.style";
import { windowHeight, windowWidth } from "../../utils/dimensions";

const Confirmation = ({ navigation }) => {
	const [pin, setPin] = useState(null);
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
								XÁC NHẬN
							</MyText>
						</View>
					</LinearGradient>
					<View style={{ flex: 1, justifyContent: "space-between" }}>
						<View style={styles.box}>
							<View style={styles.boxContent}>
								<View
									style={{ alignItems: "center", justifyContent: "center" }}
								>
									<MyText
										style={{ fontSize: SIZES.medium, color: COLORS.text }}
									>
										Nhập mã PIN
									</MyText>
									<TextInput
										style={styles.input}
										keyboardType="numeric"
										value={pin}
										onChangeText={(text) => setPin(text)}
									/>
								</View>
							</View>
						</View>

						<View>
							<MyButton2
								style={{
									width: (windowWidth * 4) / 5,
									height: windowHeight / 10,
									marginBottom: 50,
								}}
								onPress={() => {}}
							>
								<MyText style={{ color: COLORS.white, fontSize: SIZES.large }}>
									Xác nhận
								</MyText>
							</MyButton2>
						</View>
					</View>
				</View>
			</MyInputDismissKeyboard>
		</KeyboardAvoidingView>
	);
};

export default Confirmation;
