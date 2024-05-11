import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using FontAwesome, change it to the appropriate icon library

const GoogleSignInButton = ({onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Icon name="google" size={20} color="white" style={styles.icon} />
    <Text style={styles.text}>Sign in with Google</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB4437', // Google red color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default GoogleSignInButton;
