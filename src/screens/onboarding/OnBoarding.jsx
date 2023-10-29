import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import { COLORS, images } from "../../constants";
import styles from "./onboarding.style";
import { MyText } from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";

const introImg = [images.boarding1, images.boarding2, images.boarding3];

const introText = [
	{
		title: "Cất giữ tiền một cách tiện lợi.",
		description: "Hoàn tiền lên đến 5% cho mỗi giao dịch và chi tiêu dễ dàng",
	},
	{
		title: "Bảo quản tiền và và nhận thưởng.",
		description:
			"Hãy tải ứng dụng thanh toán an toàn nhất từ ​​trước đến nay và tận hưởng nó",
	},
	{
		title: "Tận hưởng các giao dịch nhanh chóng.",
		description: "Hoàn tiền lên đến 5% cho mỗi giao dịch và chi tiêu dễ dàng",
	},
];

const OnBoarding = ({ navigation }) => {
	const [count, setCount] = useState(1);
	const [img, setImg] = useState(introImg[0]);
	const [text, setText] = useState(introText[0]);
	const handleChange = (e) => {
		if (count < 3) {
			setText(introText[count]);
			setImg(introImg[count]);
			setCount((prev) => prev + 1);
		} else {
			navigation.navigate("Login");
		}
	};
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={images.logo} />
			<Image style={styles.image} source={img} />
			<View style={styles.textContainer}>
				<ImageBackground source={images.circle} style={styles.bgBox}>
					<View style={styles.textBox}>
						<MyText weight={700} style={styles.title}>
							{text.title}
						</MyText>
						<MyText weight={400} style={styles.description}>
							{text.description}
						</MyText>
						<TouchableOpacity
							onPress={(e) => handleChange(e)}
							style={styles.button}
						>
							<Text style={{ color: COLORS.white }}>
								{count === 3 ? "Get Started" : "Next"}
							</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		</View>
	);
};

export default OnBoarding;
