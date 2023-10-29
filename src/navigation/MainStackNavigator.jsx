import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
	Login,
	Register,
	Welcome,
	OnBoarding,
	BottomNavigation,
	Transfer,
	Confirmation,
} from "../screens";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
	let user = true;
	return (
		<NavigationContainer
			onStateChange={(state) => console.log("New state is", state)}
			onReady={() => console.log("Navigation container is ready")}
		>
			{!user ? (
				<Stack.Navigator>
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
				</Stack.Navigator>
			) : (
				<Stack.Navigator>
					<Stack.Screen
						name="BottomNavigation"
						component={BottomNavigation}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Transfer"
						component={Transfer}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Confirmation"
						component={Confirmation}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
};

export default MainStackNavigator;
