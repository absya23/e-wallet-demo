import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Login, Register, Welcome, OnBoarding } from "../screens";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
	let user = null;
	return (
		<NavigationContainer
			onStateChange={(state) => console.log("New state is", state)}
			onReady={() => console.log("Navigation container is ready")}
		>
			<Stack.Navigator>
				{!user ? (
					<>
						<Stack.Screen
							name="OnBoarding"
							component={OnBoarding}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Login"
							component={Login}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Register"
							component={Register}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Welcome"
							component={Welcome}
							options={{ headerShown: true }}
						/>
					</>
				) : (
					<>
						<Stack.Screen
							name="Welcome"
							component={Welcome}
							options={{ headerShown: true }}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStackNavigator;
