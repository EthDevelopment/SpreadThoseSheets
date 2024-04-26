import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Spreadsheet from './screens/SpreadsheetScreen';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}} // Optional title for Home screen
        />
        <Stack.Screen name="SpreadsheetScreen" component={Spreadsheet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
