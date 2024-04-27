import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import Welcome from '../welcome/Welcome'; // Assuming Welcome.js exists
import {useNavigation} from '@react-navigation/native';
import styles from './Home.scss';
import NavigationButton from '../../components/buttons/screenChange/NavigationButton';

const Home = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [showInput, setShowInput] = useState(true);

  const handleUsernameSubmit = submittedUsername => {
    setUsername(submittedUsername);
    setShowInput(false);
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
            <View>
              <NavigationButton
                style={styles.navigationButton}
                onPress={() => navigation.navigate('SpreadsheetScreen')}
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
