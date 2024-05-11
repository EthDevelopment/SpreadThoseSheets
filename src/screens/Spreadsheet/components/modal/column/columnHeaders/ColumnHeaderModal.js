import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './ColumnHeaderModal.scss';

const HeaderModal = ({
  visible,
  setVisible,
  handleSaveHeaders,
  numberOfColumns,
}) => {
  const [columnHeaders, setColumnHeaders] = useState(
    Array(numberOfColumns).fill(''),
  );

  useEffect(() => {
    // Initialize columnHeaders array when numberOfColumns changes
    setColumnHeaders(Array(numberOfColumns).fill(''));
  }, [numberOfColumns]);

  const handleInputChange = (index, value) => {
    const updatedHeaders = [...columnHeaders];
    updatedHeaders[index] = value;
    setColumnHeaders(updatedHeaders);
  };

  const handleInputSubmit = index => {
    if (index < numberOfColumns - 1 && refs[index + 1]?.current) {
      // Focus the next input if it exists
      refs[index + 1].current.focus();
    } else {
      // Last input or next input doesn't exist, save headers
      handleSaveHeadersAndCloseModal();
    }
  };

  const handleSaveHeadersAndCloseModal = () => {
    if (columnHeaders.some(header => header.trim() === '')) {
      // Check if any header is empty
      alert('All column headers must be filled.');
    } else {
      handleSaveHeaders(columnHeaders);
      setVisible(false);
    }
  };

  // Array to store refs to each input
  const refs = Array(numberOfColumns)
    .fill()
    .map((_, index) => React.createRef());

  // Determine the height of the modal based on the number of columns
  let modalHeight = '50%'; // Default height

  if (numberOfColumns >= 7) {
    modalHeight = '75%';
  } else if (numberOfColumns >= 4) {
    modalHeight = '55%'; // Adjusted height for 4-6 columns
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {height: modalHeight}]}>
          <Text style={styles.modalTitle}>Enter Column Headers:</Text>
          <ScrollView>
            <View style={styles.inputArea}>
              {columnHeaders.map((header, index) => (
                <TextInput
                  key={index}
                  ref={refs[index]}
                  style={styles.ColumnNameInput}
                  onChangeText={text => handleInputChange(index, text)}
                  onSubmitEditing={() => handleInputSubmit(index)}
                  value={header}
                  placeholder={`Column ${index + 1}`}
                />
              ))}
            </View>
          </ScrollView>
          <Pressable
            style={styles.saveButton}
            onPress={handleSaveHeadersAndCloseModal}>
            <Text style={styles.saveButtonText}>Save Headers</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default HeaderModal;
