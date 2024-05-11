import React, {useState} from 'react';
import {Modal, View, Text, Pressable, TextInput} from 'react-native';
import styles from './RowAmountModal.scss';

const RowAmountModal = ({visible, setVisible, handleSaveRowCount}) => {
  const [rowCount, setRowCount] = useState(''); // State to store the row count

  const handleSave = () => {
    const parsedRowCount = parseInt(rowCount); // Parse the row count to an integer
    if (!isNaN(parsedRowCount) && parsedRowCount > 0) {
      // Check if the parsed row count is a valid number
      console.log('Row Amount:', parsedRowCount); // Console log the row amount
      handleSaveRowCount(parsedRowCount); // Pass the row count to the parent component
      setVisible(false); // Close the modal
    } else {
      alert('Please enter a valid number of rows.'); // Show an alert for invalid input
    }
  };

  const handleKeyPress = event => {
    // Check if the Enter key was pressed
    if (event.nativeEvent.key === 'Enter') {
      // Call the handleSave function
      handleSave();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Enter Number of Rows:</Text>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.rowAmountInput}
              onChangeText={text => setRowCount(text)}
              value={rowCount}
              keyboardType="numeric"
              placeholder="Enter number of rows"
              onSubmitEditing={handleSave} // Call handleSave when Enter is pressed
              blurOnSubmit={false} // Prevent dismissing keyboard when Enter is pressed
            />
          </View>

          <Pressable style={[styles.saveButton]} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save rows</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default RowAmountModal;
