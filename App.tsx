// App.tsx

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import RestartButton from './components/welcome/RestartButton';
import Welcome from './components/welcome/Welcome';
import Spreadsheet from './components/functions/Spreadsheet';

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [renderSpreadsheet, setRenderSpreadsheet] = useState(false);

  const handleUsernameSubmit = () => {
    setShowWelcome(true);
  };

  const handleRestart = () => {
    setShowWelcome(false);
    setRenderSpreadsheet(false); // Reset the renderSpreadsheet state when restarting
  };

  const handleSpreadsheet = () => {
    setShowWelcome(false);
    setRenderSpreadsheet(true); // Set the renderSpreadsheet state to true to render the Spreadsheet component
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
}

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
    width: '100%', // Ensure the content takes up full width
  },
});

export default App;
