import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import Welcome from '../components/welcome/Welcome'; // Assuming Welcome.js exists
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [showInput, setShowInput] = useState(true); // Track input visibility

  const handleUsernameSubmit = submittedUsername => {
    setUsername(submittedUsername);
    setShowInput(false); // Hide input after submission
  };

  return (
    <SafeAreaView style={styles.container}>
      {showInput && ( // Conditionally render input and submit only if showInput is true
        <Welcome showWelcome={false} onUsernameSubmit={handleUsernameSubmit} />
      )}
      {username && ( // Render welcome message and buttons only if username has a value
        <View style={styles.container}>
          <Text style={styles.welcomeText}>
            {username}, select a{'\n'} utility
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.homeButton}
              title="Home"
              onPress={() => navigation.navigate('Home')}
            />
            <Button
              style={styles.sheetButton}
              title="Spreadsheet creator"
              onPress={() => navigation.navigate('SpreadsheetScreen')}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  welcomeText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column', // Buttons stacked vertically
    justifyContent: 'center', // Center buttons within the container
    alignItems: 'center', // Center buttons horizontally
  },
  sheetButton: {
    padding: 100,
    backgroundColor: 'green',
    color: 'white',
  },
});

export default Home;
