import React, {useState} from 'react';
import {Modal, View, Text, Pressable, TextInput} from 'react-native';
import styles from './../../../../SpreadsheetScreen.scss';

const ColumnAmountModal = ({visible, setVisible, handleSaveColumnCount}) => {
  const [numberOfColumnsModal, setNumberOfColumnsModal] = useState(2);

  //   const handleSaveColumnCount = columnCount => {
  //     console.log('Column Amount:', columnCount);
  //     setNumberOfColumns(columnCount); // Update number of columns
  //   };

  const handleSaveColumnCountPress = async () => {
    // Wait for the save button to be pressed
    await new Promise(resolve => {
      handleSaveColumnCount(numberOfColumnsModal); // Pass the numberOfColumnsModal value
      resolve();
    });
    setVisible(false); // Close the modal
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            By default, your spreadsheet will have 2 columns. Change the value
            if you want more.
          </Text>
          <TextInput
            style={styles.projectNameInput}
            keyboardType="numeric"
            onChangeText={text => {
              const parsedValue = parseInt(text);
              setNumberOfColumnsModal(isNaN(parsedValue) ? 0 : parsedValue);
            }}
            value={numberOfColumnsModal.toString()}
            placeholder="Enter number of columns"
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={handleSaveColumnCountPress}>
            <Text style={styles.textStyleClose}>Save Column Count</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ColumnAmountModal;
