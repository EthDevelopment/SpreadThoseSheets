import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import Welcome from '../../components/welcome/Welcome'; // Assuming Welcome.js exists
import {useNavigation} from '@react-navigation/native';
import styles from './Home.scss';
import NavigationButton from '../../components/buttons/NavigationButton';

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
            {username},{'\n'} select a utility
          </Text>
          <View>
            <NavigationButton
              onPress={() => navigation.navigate('Home')} // Pass navigation function
              title="Home"
            />
            <View>
              <NavigationButton
                onPress={() => navigation.navigate('SpreadsheetScreen')} // Pass navigation function
                title="Spreadsheet creator"
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
