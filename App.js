import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import CasualScreen from './screens/Casual';
import DeportivoScreen from './screens/Deportivo';
import AestheticScreen from "./screens/Aesthetic";
import DarkScreen from "./screens/Dark";
import SesentasScreen from "./screens/Sesentas";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Deportivo" component={DeportivoScreen} />
        <Stack.Screen name="Aesthetic" component={AestheticScreen} />
        <Stack.Screen name="Casual" component={CasualScreen} />
        <Stack.Screen name="Dark" component={DarkScreen} />
        <Stack.Screen name="Sesentas" component={SesentasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
