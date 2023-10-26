import "react-native-gesture-handler";
import Toast from 'react-native-toast-message';
import MainStackNavigator from "./src/navigation/MainStackNavigator";

const App = () => {
	return (<><MainStackNavigator></MainStackNavigator><Toast /></>)
};

export default App;
