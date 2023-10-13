import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import Stack from './StackNavigation/Stack';
import DrawerNavigation from './DrawerNavigation/Drawer';
import Tab from './TabNavigation/Tab';
export default function App(){
  return (
    <NavigationContainer>
      <Tab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
