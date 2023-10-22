import React, { useState } from "react";
import { Button, Image, ImageBackground, Text, View } from "react-native";

import { images } from "../../constants";
import styles from "./onboarding.style";
import { MyText } from "../../components";

const OnBoarding = ({ params }) => {
	const [img, setImg] = useState(images.boarding1);
	const [text, setText] = useState({
		title: "Cất giữ tiền một cách tiện lợi.",
		description: "Hoàn tiền lên đến 5% cho mỗi giao dịch và chi tiêu dễ dàng",
	});
	const handleChange = () => {};
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
							<Button title="next" onPress={handleChange} />
						</View>
					</View>
				</ImageBackground>
			</View>
		</View>
	);
};

export default OnBoarding;
