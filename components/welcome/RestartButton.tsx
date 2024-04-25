// components/welcome/RestartButton.tsx

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface RestartButtonProps {
  onPress: () => void;
}

const RestartButton: React.FC<RestartButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Restart</Text>
    </TouchableOpacity>
  );
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

export default RestartButton;
