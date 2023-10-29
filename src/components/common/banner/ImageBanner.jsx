import React from "react";
import { Image, View } from "react-native";
import { images } from "../../../constants";
import { windowWidth } from "../../../utils/dimensions";

const ImageBanner = ({ src }) => (
	<View>
		<Image
			source={{ uri: src }}
			style={{
				width: windowWidth - 50,
				height: 200,
				marginRight: 50,
				borderRadius: 8,
			}}
			resizeMode="cover"
		/>

		<Image
			source={images.opacity}
			style={{
				width: windowWidth - 50,
				height: 200,
				position: "absolute",
				marginRight: 50,
				borderRadius: 8,
			}}
			resizeMode="cover"
		/>
	</View>
);

export default ImageBanner;
