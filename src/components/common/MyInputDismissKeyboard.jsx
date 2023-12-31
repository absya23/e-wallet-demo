import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const MyInputDismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		{children}
	</TouchableWithoutFeedback>
);

export default MyInputDismissKeyboard;
