import React, { useState, useEffect } from "react";
import {
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	Text,
	TextInput,
	View,
	ActivityIndicator
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Storage } from 'expo-storage'
import Toast from 'react-native-toast-message';
import styles from "./user.style";
import { COLORS, icons, images } from "../../constants";
import { users } from "../../api/mockData"

const Login = ({ navigation }) => {
	// data
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
	const handleSignIn = async (phone, password) => {
		const result = userArr.find((item) => item.phoneNumber == phone && item.pin == password)
		if (result) {
			await Storage.setItem({
				key: "user",
				value: JSON.stringify(result)
			  })
			Toast.show({
			    type: 'success',
				text1: 'Login successfully',
			});
			navigation.navigate("Welcome");
		}
		else {
			Toast.show({
				type: 'error',
				text1: 'Please check your phone and password',
			  });
			  setErrorMessage("Wrong phone or password")
		}	
	};
	return (
		<ImageBackground source={images.login_bg} style={styles.backgroundImage}>
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View>
					<Text style={styles.title}>Đăng nhập</Text>
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.inputForm}>
						<Image source={icons.user} />
						<TextInput
							placeholder="Số điện thoại"
							value={phone}
							style={{
								...styles.input,
							}}
							onChangeText={(text) => {
								setPhone(text);
								setErrorMessage("");
							}}
						></TextInput>
					</View>
					<View style={styles.inputForm}>
						<Image source={icons.password} />
						<TextInput
							placeholder="Mật khẩu"
							secureTextEntry={isPasswordSecure}
							value={password}
							style={styles.input}
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
						onPress={() => handleSignIn(phone, password)}
						style={{
							...styles.button,
							backgroundColor: isPending ? COLORS.primary : COLORS.secondary,
						}}
						disabled={isPending}
					>
						{isPending ? (
							<ActivityIndicator />
						) : (
							<Text style={{ color: COLORS.white, fontWeight: "700" }}>
								Đăng nhập
							</Text>
						)}
					</TouchableOpacity>
				</View>
				<View style={styles.registerGroup}>
					<Text
						style={{
							color: COLORS.secondary,
							fontWeight: "400",
							fontSize: 14,
						}}
					>
						Bạn chưa có tài khoản?
					</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("Register")}
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
							Đăng ký
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default Login;
