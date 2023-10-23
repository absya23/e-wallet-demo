import React, { useState } from "react";
import { Button, Image, ImageBackground, Text, View } from "react-native";

import { images } from "../../constants";
import styles from "./onboarding.style";
import { MyText } from "../../components";

const introText = [
	{
		title: "Cất giữ tiền một cách tiện lợi.",
		description: "Hoàn tiền lên đến 5% cho mỗi giao dịch và chi tiêu dễ dàng",
	},
	{
		title: "Cất giữ tiền một cách tiện lợi 2.",
		description: "Hoàn tiền lên đến 5% cho mỗi giao dịch và chi tiêu dễ dàng",
	},
	{
		title: "Cất giữ tiền một cách tiện lợi 3.",
		description: "Hoàn tiền lên đến 5% cho mỗi giao dịch và chi tiêu dễ dàng",
	},
];

const OnBoarding = ({ navigation }) => {
	const [count, setCount] = useState(1);
	const [img, setImg] = useState(images.boarding1);
	const [text, setText] = useState(introText[0]);
	const handleChange = (e) => {
		if (count < 3) {
			setText(introText[count]);
			setCount((prev) => prev + 1);
		} else {
			navigation.navigate("Welcome");
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
						<View>
							<Button title="next" onPress={(e) => handleChange(e)} />
						</View>
					</View>
				</ImageBackground>
			</View>
		</View>
	);
};

export default OnBoarding;
