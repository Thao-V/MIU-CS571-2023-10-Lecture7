import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import Home from './components/Home';
import Settings from './components/Settings'
const Drawer = createDrawerNavigator();
export default function DrawerNavigation(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} options={{title: "My Home"}}/>
      <Drawer.Screen name="settings" component={Settings}/>
    </Drawer.Navigator>
  )

}