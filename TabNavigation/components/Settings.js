import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Text, View, Button } from "react-native"
const Stack = createNativeStackNavigator();
function Language(){
  return <Text>Language</Text>
}
function MyMessage(){
  const navigation = useNavigation();
  const pressed = () => {
    navigation.navigate("language");
  }
  return (
    <View>
      <Text>MyMessage</Text>
      <Button onPress={pressed} title="Language"/>
    </View>
  )
}
function Font({navigation}){
  
  return (
    <View>
      <Text>Font</Text>
      <MyMessage/>
    </View>
  )
}
export default function Settings({navigation, route}){
  return (
    <Stack.Navigator initialRouteName="font">
      <Stack.Screen name="language" component={Language}/>
      <Stack.Screen name="font" component={Font}/>
    </Stack.Navigator>
  )
}