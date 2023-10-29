import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./transfer.style";
import { MySearch, MyText } from "../../components";
import { COLORS, SIZES, images } from "../../constants";

const DATA = [
	{
		id: 1,
		image: images.avatar,
		name: "Linh Đan",
		phone: "0123 456 789",
	},
	{
		id: 2,
		image: images.avatar,
		name: "Đan Trường",
		phone: "0123 456 113",
	},
];

const TransferHome = ({ navigation }) => {
	const handleTransfer = (item) => {
		navigation.navigate("Transfer");
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.searchGroup}>
				<MySearch></MySearch>
			</View>
			<View style={styles.boxList}>
				<MyText style={{}}>Đề xuất</MyText>
				<FlatList
					horizontal={true}
					data={DATA}
					renderItem={({ item, separators }) => (
						<UserItem
							data={item}
							handle={(item) => handleTransfer(item)}
						></UserItem>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</SafeAreaView>
	);
};

const UserItem = ({ data, handle }) => {
	return (
		<TouchableOpacity key={data.key} onPress={handle} style={styles.boxUser}>
			<Image source={data.image} style={styles.imgAvt} />
			<View
				style={{
					backgroundColor: "white",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<MyText
					weight={300}
					style={{ color: COLORS.gray, fontSize: 14, flexWrap: "wrap" }}
				>
					{data.name}
				</MyText>
				<MyText
					weight={200}
					style={{ color: COLORS.gray, fontSize: 10, flexWrap: "wrap" }}
				>
					{data.phone}
				</MyText>
			</View>
		</TouchableOpacity>
	);
};

export default TransferHome;
