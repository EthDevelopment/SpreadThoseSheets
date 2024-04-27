import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomeButton from '../../components/welcome/HomeButton';

const Spreadsheet = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.row}>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              color="black"
            />
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>Age:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your age"
              color="black"
            />
          </View>
        </View>
        {/* Create two more rows with input boxes */}
        {[1, 2].map(index => (
          <View key={index} style={styles.row}>
            <View style={styles.columnContainer}>
              <Text style={styles.label}>{`Name ${index + 1}:`}</Text>
              <TextInput
                style={styles.input}
                placeholder={`Name ${index + 1}`}
                color="black"
              />
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.label}>Age:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your age"
                color="black"
              />
            </View>
          </View>
        ))}
      </View>
      <HomeButton style={styles.homeButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white', // Add a background color
  },
  contentContainer: {
    flex: 1, // Allow space for content and push down button
    justifyContent: 'flex-start', // Align content at top
    alignItems: 'center',
    marginTop: '15%', // Add top margin (adjust as needed)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute evenly
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginBottom: 5, // Adjust spacing if needed
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 5,
    flex: 1, // Adjust width if needed
    color: 'black', // Set text color to black
  },
  columnContainer: {
    width: '50%',
    paddingHorizontal: 5, // Padding on each side
    justifyContent: 'center', // Center elements vertically
  },
  homeButton: {
    position: 'absolute', // Position button at bottom
    bottom: '25%', // Adjust from bottom (25% from screen height)
    alignSelf: 'center', // Center button horizontally
  },
});

export default Spreadsheet;
