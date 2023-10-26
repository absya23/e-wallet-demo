import React, { useState, useEffect } from "react";
import {
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	Text,
	TextInput,
	View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Storage } from 'expo-storage'
import Toast from 'react-native-toast-message';
import styles from "./user.style";
import { COLORS, icons, images } from "../../constants";
import { users } from "../../api/mockData"

const Register = ({ navigation }) => {
	// data
	const [username, setUsername] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordSecure, setIsPasswordSecure] = useState(true);
	const [isPending, setIsPending] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [userArr, setUserArr] = useState([]);

	useEffect(() => {
		const getData = async () => {
			//TODO call API get users
			setUserArr(users);
		}
		getData();
	}, [])

	// handle
	const handleSignUp = async (username, phone, password) => {
		const isExisting = !!userArr.find((item) => item.phoneNumber == phone);
		if (!isExisting) {
			const payload = {
				phoneNumber: phone,
				pin: password,
				name: username,
				balance: 0,
			}
			//TODO call API post user
			payload.userId = 25;
			await Storage.setItem({
				key: "user",
				value: JSON.stringify(payload)
			  })
			  Toast.show({
			    type: 'success',
				text1: 'Register successfully',
			});
			navigation.navigate("Welcome");	
		}
		else {
			Toast.show({
				type: 'error',
				text1: 'Already exist',
			  });
			setErrorMessage("Already exist")
		}
	};
	return (
		<ImageBackground source={images.login_bg} style={styles.backgroundImage}>
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View>
					<Text style={styles.title}>Đăng ký</Text>
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.inputForm}>
						<TextInput
							placeholder="Họ tên"
							value={username}
							style={styles.input}
							onChangeText={(text) => {
								setUsername(text);
								setErrorMessage("");
							}}
						></TextInput>
					</View>
					<View style={styles.inputForm}>
						<TextInput
							placeholder="Số điện thoại"
							value={phone}
							style={styles.input}
							onChangeText={(text) => {
								setPhone(text);
								setErrorMessage("");
							}}
						></TextInput>
					</View>
					<View style={styles.inputForm}>
						<TextInput
							placeholder="Password"
							value={password}
							style={styles.input}
							secureTextEntry={isPasswordSecure}
							onChangeText={(text) => {
								setPassword(text);
								setErrorMessage("");
							}}
						></TextInput>
						<TouchableOpacity
							onPress={() => {
								isPasswordSecure
									? setIsPasswordSecure(false)
									: setIsPasswordSecure(true);
							}}
							style={{ position: "absolute", right: 12 }}
						>
							<Image
								source={icons.eye2}
								style={{ width: 16, height: 16, resizeMode: "contain" }}
							/>
						</TouchableOpacity>
					</View>
					{errorMessage && (
						<View style={{ marginVertical: 14 }}>
							<Text style={{ color: "red" }}>{errorMessage}</Text>
						</View>
					)}
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={() => handleSignUp(username, phone, password)}
						style={{
							...styles.button,
							backgroundColor: isPending ? "#65b66f" : COLORS.primary,
						}}
					>
						{isPending ? (
							<ActivityIndicator />
						) : (
							<Text style={{ color: "#fff", fontWeight: "700" }}>
								Tạo tài khoản
							</Text>
						)}
					</TouchableOpacity>
				</View>
				<View style={styles.registerGroup}>
					<Text>Bạn đã có tài khoản? </Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("Login")}
						style={styles.register}
					>
						<Text
							style={{
								color: COLORS.primary,
								fontWeight: "600",
								fontSize: 16,
								textAlign: "center",
								marginLeft: 10,
							}}
						>
							Đăng nhập
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default Register;
