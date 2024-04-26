import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Welcome = ({showWelcome, onUsernameSubmit}) => {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleUsernameSubmit = () => {
    if (!username.trim()) {
      // Check for empty username after trimming whitespaces
      setErrorMessage('Please enter your name!');
      return; // Prevent submitting empty username
    }
    onUsernameSubmit(username);
    setErrorMessage(''); // Clear error message if submission is successful
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
              onChangeText={text => {
                setUsername(text);
                // Check for empty username and set error message if needed
                if (!text.trim()) {
                  setErrorMessage('Please enter your name!');
                } else {
                  setErrorMessage(''); // Clear error message if input has content
                }
              }}
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
      {/* Error message positioned at the bottom */}
      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
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
  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorContainer: {
    position: 'absolute',
    bottom: 150,
    left: 0,
    right: 0,
  },
});

export default Welcome;
