import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../screens";
import OnBoarding from "../screens/onboarding/OnBoarding";

const Stack = createStackNavigator();

const MainStackNavigator = () => (
	<NavigationContainer
		onStateChange={(state) => console.log("New state is", state)}
		onReady={() => console.log("Navigation container is ready")}
	>
		<Stack.Navigator>
			<Stack.Screen
				name="OnBoarding"
				component={OnBoarding}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Welcome" component={Welcome} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default MainStackNavigator;
