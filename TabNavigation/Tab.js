import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import Settings from "./components/Settings";
import {MaterialCommunityIcons} from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={Home} options={{
        title: "My Home",
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" size={26} color={color}/>
      }}/>
      <Tab.Screen name="settings" component={Settings} options={{
        title: "Settings",
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="cog" size={26} color={color}/>
      }}/>
    </Tab.Navigator>
  );
}
