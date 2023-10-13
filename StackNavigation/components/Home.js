import { Text, View, Button } from "react-native"
export default function Home({navigation}){
  const moveToSettings = () => {
    navigation.navigate("settings", {name: "thao"})
  }

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={moveToSettings} title="Settings"/>
    </View>
  )
}