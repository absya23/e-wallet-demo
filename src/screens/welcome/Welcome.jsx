import React from "react";
import { Text, View } from "react-native";

import styles from "./welcome.style";
import { MyText } from "../../components";

const Welcome = ({ navigation }) => (
	<View style={styles.container}>
		<Text>Welcome</Text>
		<MyText>Welcome</MyText>
		<MyText weight={800}>Cất trữ tiền một cách tiện lợi</MyText>
	</View>
);

export default Welcome;
