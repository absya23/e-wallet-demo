import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

let customFonts = {
	"Montserrat-Black": require("../../../assets/fonts/Montserrat-Black.ttf"),
	"Montserrat-Bold": require("../../../assets/fonts/Montserrat-Bold.ttf"),
	"Montserrat-ExtraBold": require("../../../assets/fonts/Montserrat-ExtraBold.ttf"),
	"Montserrat-ExtraLight": require("../../../assets/fonts/Montserrat-ExtraLight.ttf"),
	"Montserrat-Light": require("../../../assets/fonts/Montserrat-Light.ttf"),
	"Montserrat-Medium": require("../../../assets/fonts/Montserrat-Medium.ttf"),
	"Montserrat-Regular": require("../../../assets/fonts/Montserrat-Regular.ttf"),
	"Montserrat-SemiBold": require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
	"Montserrat-Thin": require("../../../assets/fonts/Montserrat-Thin.ttf"),
	"SF-Pro-Display-Black": require("../../../assets/fonts/SF-Pro-Display-Black.otf"),
	"SF-Pro-Display-Bold": require("../../../assets/fonts/SF-Pro-Display-Bold.otf"),
	"SF-Pro-Display-Heavy": require("../../../assets/fonts/SF-Pro-Display-Heavy.otf"),
	"SF-Pro-Display-Thin": require("../../../assets/fonts/SF-Pro-Display-Thin.otf"),
	"SF-Pro-Display-Light": require("../../../assets/fonts/SF-Pro-Display-Light.otf"),
	"SF-Pro-Display-Medium": require("../../../assets/fonts/SF-Pro-Display-Medium.otf"),
	"SF-Pro-Display-Regular": require("../../../assets/fonts/SF-Pro-Display-Regular.otf"),
	"SF-Pro-Display-SemiBold": require("../../../assets/fonts/SF-Pro-Display-Semibold.otf"),
};

const MyText = ({ style, weight, children }) => {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const [font, setFont] = useState("SF-Pro-Display-Regular");

	const _loadFontsAsync = async () => {
		await Font.loadAsync(customFonts);
		setFontsLoaded(true);
	};

	useEffect(() => {
		_loadFontsAsync();
		switch (weight) {
			// case 100:
			//   setFont("Nunito-Italic");
			//   break;
			case 200:
				setFont("SF-Pro-Display-Thin");
				break;
			case 300:
				setFont("SF-Pro-Display-Light");
				break;
			case 500:
				setFont("SF-Pro-Display-Mediums");
				break;
			case 600:
				setFont("SF-Pro-Display-SemiBold");
				break;
			case 700:
				setFont("Montserrat-Bold");
				break;
			case 800:
				setFont("Montserrat-ExtraBold");
				break;
			case 900:
				setFont("Montserrat-Black");
				break;
			default:
				setFont("SF-Pro-Display-Regular");
		}
	}, []);

	if (!fontsLoaded) {
		return null;
	}

	return <Text style={{ ...style, fontFamily: font }}>{children}</Text>;
};

export default MyText;
