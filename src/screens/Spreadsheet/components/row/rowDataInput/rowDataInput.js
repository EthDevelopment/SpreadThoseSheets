import React, {useState, useEffect} from 'react';
import {Modal, View, Text, Pressable, TextInput} from 'react-native';
import styles from './rowDataInput.scss';

const RowDataInput = ({
  visible,
  setVisible,
  rowAmount,
  columnHeaders,
  projectName,
  handleSaveRowData, // Add handleSaveRowData as a prop
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rowData, setRowData] = useState(
    Array(columnHeaders.length).fill(Array(rowAmount).fill('')),
  );

  useEffect(() => {
    // Update row data structure when row amount changes
    setRowData(Array(columnHeaders.length).fill(Array(rowAmount).fill('')));
  }, [rowAmount, columnHeaders]);

  const handleSave = () => {
    handleSaveRowData(rowData);
    setVisible(false);
    // Transpose rowData array
    const transposedRowData = rowData[0].map((_, colIndex) =>
      rowData.map(row => row[colIndex]),
    );

    console.log('Row Data:', transposedRowData);
    setVisible(false);

    // Log project details and table
    console.log('\nYour project is called:', projectName);
    console.log('with the format of a table\n');

    // Calculate the maximum length of each cell in the table
    const maxLengths = columnHeaders.map((_, index) =>
      Math.max(...transposedRowData.map(row => row[index].length)),
    );

    // Log the header row with evenly spaced vertical bars
    console.log(
      columnHeaders
        .map(
          (header, index) => header.padEnd(maxLengths[index]), // Pad each header to match the maximum length of its column
        )
        .join(' | '),
    );

    // Log the rows with evenly spaced vertical bars
    transposedRowData.forEach(row => {
      console.log(
        row
          .map(
            (cell, index) => cell.padEnd(maxLengths[index]), // Pad each cell to match the maximum length of its column
          )
          .join(' | '),
      );
    });
  };

  const handleNext = () => {
    if (currentIndex < columnHeaders.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Save row data here
      handleSaveRowData(rowData.map(row => row[0])); // Assuming you want to save only the first column data
      handleSave(); // Proceed or save accordingly
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
    updatedRowData[currentIndex] = [...updatedRowData[currentIndex]];
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
