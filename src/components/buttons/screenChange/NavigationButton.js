import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './NavigationButton.scss'; // Import SCSS

const NavigationButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.navigationButton}>
      <Text style={[styles.navigationButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NavigationButton;
