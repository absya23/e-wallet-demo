import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	Setting,
	TransactionHistory,
	Transfer,
	TransferHome,
	Wallet,
	Welcome,
} from "../screens";
import { View } from "react-native";
import { COLORS } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ navigation }) => (
	<Tab.Navigator
		// tabBar={(props) => <MyTabBar {...props} />}
		initialRouteName="Welcome"
		activeColor="#e91e63"
		barStyle={{ backgroundColor: "tomato" }}
	>
		<Tab.Screen
			name="Trang chủ"
			component={Welcome}
			options={{
				tabBarLabel: "Trang chủ",
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="home" color={color} size={26} />
				),
			}}
		/>
		<Tab.Screen
			name="Quản lý ví"
			component={Wallet}
			options={{
				headerShown: false,
				tabBarLabel: "Ví",
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons
						name="wallet-outline"
						color={color}
						size={26}
					/>
				),
			}}
		/>
		<Tab.Screen
			name="Giao dịch"
			component={TransferHome}
			options={{
				tabBarLabel: "",
				tabBarIcon: ({ color }) => (
					<View
						style={{
							position: "absolute",
							bottom: 10, // space from bottombar
							height: 50,
							width: 50,
							borderRadius: 100,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: COLORS.primary,
							color: "white",
						}}
					>
						<MaterialCommunityIcons
							name="plus-box-outline"
							color={"white"}
							size={26}
						/>
					</View>
				),
			}}
		/>
		<Tab.Screen
			name="Lịch sử giao dịch"
			component={TransactionHistory}
			options={{
				tabBarLabel: "Lịch sử",
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="clock" color={color} size={26} />
				),
			}}
		/>
		<Tab.Screen
			name="Cài đặt"
			component={Setting}
			options={{
				tabBarLabel: "Cài đặt",
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="cog-outline" color={color} size={26} />
				),
			}}
		/>
	</Tab.Navigator>
);

export default BottomNavigation;
