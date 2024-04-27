// components/welcome/HomeButton.js

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeButton = ({onPress}) => {
  const navigation = useNavigation();
  return <Button title="Home" onPress={() => navigation.navigate('Home')} />;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeButton;
