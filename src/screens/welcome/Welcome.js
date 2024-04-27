import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Welcome.scss';

const Welcome = ({showWelcome, onUsernameSubmit}) => {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleUsernameSubmit = () => {
    if (!username.trim()) {
      // Check for empty username after trimming whitespaces
      setErrorMessage('You can make one up if you like :) ');
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
              placeholder="What's your name?"
              placeholderTextColor="black"
              onChangeText={text => {
                setUsername(text);
                // Check for empty username and set error message if needed
                if (!text.trim()) {
                  setErrorMessage('You can make one up if you like :)');
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

export default Welcome;
