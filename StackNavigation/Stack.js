import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Settings from "./components/Settings";

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="settings">
      <Stack.Screen name="home" component={Home} options={{title: "My Home", headerShown: false}} />
      <Stack.Screen name="settings" component={Settings} options={{headerShown: true}} />
    </Stack.Navigator>
  );
}
