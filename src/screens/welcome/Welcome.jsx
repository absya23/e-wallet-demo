import React from "react";
import { StatusBar, Text, View } from "react-native";

import styles from "./welcome.style";
import { BannerCarousel, MyText, MyVoiceBot } from "../../components";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Welcome = ({ navigation }) => (
	// <View style={styles.container}>
	// 	<Text>Welcome</Text>
	// 	<MyText>Welcome</MyText>
	// 	<MyText weight={800}>Cất trữ tiền một cách tiện lợi</MyText>
	// </View>
	<View>
		<View
			style={{
				flex: 1,
				width: "100%",
				backgroundColor: "#fff",
				paddingTop: 10,
			}}
		>
			<StatusBar
				backgroundColor="#fff"
				barStyle="dark-content"
				translucent={false}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				persistentScrollbar={true}
				style={{
					backgroundColor: "#fff",
					position: "relative",
				}}
				stickyHeaderIndices={[0]}
			>
				<View
					style={{
						marginTop: 30,
						width: "100%",
					}}
				>
					<MyText></MyText>
					<BannerCarousel></BannerCarousel>
					<View
						style={{
							marginTop: 10,
							width: "100%",
							paddingLeft: 25,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<FlatList
							style={{
								height: 220,
							}}
							contentContainerStyle={{
								flexGrow: 1,
								justifyContent: "center",
								alignItems: "center",
								padding: 2,
							}}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
				</View>

				<View
					style={{
						marginTop: 20,
						width: "100%",
					}}
				>
					<MyText>Dịch vụ nổi bật</MyText>
					<View
						style={{
							marginTop: 10,
							width: "100%",
							paddingLeft: 25,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<FlatList
							style={{
								height: 220,
							}}
							contentContainerStyle={{
								flexGrow: 1,
								justifyContent: "center",
								alignItems: "center",
								padding: 2,
							}}
							showsHorizontalScrollIndicator={false}
							// data={ranks}
							// renderItem={renderItem}
							// keyExtractor={(item) => item.id}
							horizontal={true}
						/>
					</View>
				</View>

				<View style={{ marginBottom: 80 }} />
			</ScrollView>
		</View>
		<MyVoiceBot></MyVoiceBot>
	</View>
);

export default Welcome;
