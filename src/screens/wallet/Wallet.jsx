import React from "react";
import { Image, KeyboardAvoidingView, Platform, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./wallet.style";
import { MyButton, MyInputDismissKeyboard, MyText } from "../../components";
import { COLORS, SIZES, images } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Wallet = ({ navigation }) => {
	let balance = "1.500.000";
	const handleNavigate = () => {
		navigation.navigate("Trang chủ");
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
								Quản lý ví
							</MyText>
							<View style={styles.avtGroup}>
								<Image source={images.avatar} style={styles.avt} />
								<View style={styles.dot}></View>
							</View>
						</View>
					</LinearGradient>
					<View
						style={{
							flex: 1,
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<View style={styles.box}>
							<View style={styles.boxContent}>
								<View style={styles.row}>
									<View style={{ alignItem: "flex-start" }}>
										<MyText
											style={{ fontSize: SIZES.medium, color: COLORS.desc }}
										>
											Số dư:{" "}
										</MyText>
										<MyText
											style={{
												fontSize: SIZES.xxLarge,
												color: COLORS.secondary,
											}}
											weight={700}
										>
											{balance} VNĐ
										</MyText>
									</View>
									<TouchableOpacity>
										<MyText
											style={{ fontSize: SIZES.large, color: COLORS.desc }}
										>
											...
										</MyText>
									</TouchableOpacity>
								</View>
								<Image source={images.column} style={styles.image} />
							</View>
						</View>
						<View style={{ marginBottom: 70 }}>
							<MyButton
								style={styles.boxBottom}
								onPress={() => handleNavigate()}
							>
								<MyText
									style={{
										fontSize: SIZES.large,
										color: COLORS.white,
										flexWrap: "wrap",
										paddingLeft: 30,
									}}
									weight={200}
								>
									Kiểm tra lịch sử giao dịch
								</MyText>
							</MyButton>
						</View>
					</View>
				</View>
			</MyInputDismissKeyboard>
		</KeyboardAvoidingView>
	);
};

export default Wallet;
