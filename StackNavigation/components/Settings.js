import { Text, View, Button } from "react-native"
export default function Settings({navigation, route}){
  const moveBack = () => {
    navigation.goBack();
  }
  return (
    <View>
      <Text>Settings</Text>
      <Text>{route.params.name}</Text>
      <Button onPress={moveBack} title="Home"/>
    </View>
  )
}