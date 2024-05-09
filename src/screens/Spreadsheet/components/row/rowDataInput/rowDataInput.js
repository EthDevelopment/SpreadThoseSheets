import React, {useState, useEffect} from 'react';
import {Modal, View, Text, Pressable, TextInput} from 'react-native';
import styles from './rowDataInput.scss';

const RowDataInput = ({visible, setVisible, rowAmount, columnHeaders}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rowData, setRowData] = useState(
    Array(columnHeaders.length).fill(Array(rowAmount).fill('')),
  );

  useEffect(() => {
    // Update row data structure when row amount changes
    setRowData(Array(columnHeaders.length).fill(Array(rowAmount).fill('')));
  }, [rowAmount, columnHeaders]);

  const handleSave = () => {
    // Transpose rowData array
    const transposedRowData = rowData[0].map((_, colIndex) =>
      rowData.map(row => row[colIndex]),
    );

    console.log('Row Data:', transposedRowData);
    setVisible(false);
  };

  const handleNext = () => {
    if (currentIndex < columnHeaders.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleSave();
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleBack = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleInputChange = (text, rowIndex) => {
    const updatedRowData = [...rowData];
    updatedRowData[currentIndex] = [...rowData[currentIndex]];
    updatedRowData[currentIndex][rowIndex] = text;
    setRowData(updatedRowData);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Enter Data:</Text>
          <Text style={styles.columnTitle}>{columnHeaders[currentIndex]}</Text>
          <View style={styles.rowDataInputsContainer}>
            {[...Array(rowAmount)].map((_, rowIndex) => (
              <TextInput
                key={rowIndex}
                style={styles.rowDataInput}
                placeholder={`Enter data for ${columnHeaders[currentIndex]}`}
                onChangeText={text => handleInputChange(text, rowIndex)}
                value={rowData[currentIndex][rowIndex]}
              />
            ))}
          </View>
          <View style={styles.buttonContainer}>
            {currentIndex === 0 ? (
              <Pressable style={styles.closeButton} onPress={handleClose}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.backButton} onPress={handleBack}>
                <Text style={styles.backButtonText}>Back</Text>
              </Pressable>
            )}
            <Pressable style={styles.saveButton} onPress={handleNext}>
              <Text style={styles.saveButtonText}>
                {currentIndex < columnHeaders.length - 1 ? 'Next' : 'Save'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RowDataInput;
