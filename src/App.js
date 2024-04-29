import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home/Home';
import Spreadsheet from './screens/Spreadsheet/SpreadsheetScreen';
import styles from './App.scss';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Welcome',
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: 'white',
            headerTitleStyle: {fontSize: 25, fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="SpreadsheetScreen"
          component={Spreadsheet}
          options={{
            title: 'Spreadsheet Creator',
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
