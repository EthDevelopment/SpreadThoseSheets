// components/welcome/Welcome.tsx

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface WelcomeProps {
  showWelcome: boolean;
  onUsernameSubmit: (username: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({showWelcome, onUsernameSubmit}) => {
  const [username, setUsername] = useState('');

  const handleUsernameSubmit = () => {
    onUsernameSubmit(username);
  };

  return (
    <>
      <View>
        {!showWelcome && <Text style={styles.welcomeText}>Welcome!</Text>}
        {showWelcome && <Text style={styles.text}>Welcome, {username}!</Text>}
      </View>
      <View>
        {!showWelcome && (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="black"
              onChangeText={text => setUsername(text)}
            />
          </View>
        )}
        {!showWelcome && (
          <View>
            <TouchableOpacity
              onPress={handleUsernameSubmit}
              style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    color: 'black',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '200%', // Adjust width to take up half the space horizontally
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },

  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
    width: '75%',
    alignSelf: 'center', // Center the button horizontally within its container
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Welcome;
