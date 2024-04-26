import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import RestartButton from '../components/welcome/RestartButton';
import Welcome from '../components/welcome/Welcome';
import Spreadsheet from '../components/functions/Spreadsheet';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const [showWelcome, setShowWelcome] = useState(false);
  const [renderSpreadsheet, setRenderSpreadsheet] = useState(false);

  const handleUsernameSubmit = () => {
    setShowWelcome(true);
  };

  const handleRestart = () => {
    setShowWelcome(false);
    setRenderSpreadsheet(false);
  };

  const handleSpreadsheet = () => {
    setShowWelcome(false);
    setRenderSpreadsheet(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Welcome
          showWelcome={showWelcome}
          onUsernameSubmit={handleUsernameSubmit}
        />
        {showWelcome && <RestartButton onPress={handleRestart} />}
        {showWelcome && <Spreadsheet onPress={handleSpreadsheet} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Home;
