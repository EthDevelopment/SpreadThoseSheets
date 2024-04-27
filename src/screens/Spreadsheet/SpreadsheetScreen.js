import React, {useState} from 'react';

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FooterNav from '../../components/buttons/footerNav/FooterNav';
import styles from './SpreadsheetScreen.scss';

const Spreadsheet = () => {
  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [projectName, setProjectName] = useState(''); // State to store project name

  const showModalOnFirstRender = () => {
    if (!hasShownModal) {
      setIsModalVisible(true);
      setHasShownModal(true);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    showModalOnFirstRender(); // Call the function here
  };

  const handleSaveProject = () => {
    // Implement logic to save project name (e.g., using an API call)
    console.log('Project name:', projectName);
    setModalVisible(false); // Close the modal after saving
  };

  return (
    <View style={styles.container}>
      {/* Section 1 (Empty container for customization) */}
      <View style={styles.spreadSheetNameInput}>
        {/* ... your existing content */}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Enter Project Name:</Text>
                <TextInput
                  style={styles.projectNameInput}
                  onChangeText={setProjectName}
                  value={projectName}
                  placeholder="Type here"
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleSaveProject}>
                  <Text style={styles.textStyleClose}>Save Project</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyleClose}>Click to start</Text>
          </Pressable>

          {hasShownModal ? null : ( // Only render if modal hasn't been shown
            <View>{/* Your components that rely on the modal state */}</View>
          )}
        </View>
      </View>
      <View style={styles.spreadSheetNameInput}>
        {/* ... your existing content */}
        <View style={styles.centeredView}>{/* ... your modal code ... */}</View>
        {projectName !== '' && ( // Check if projectName has a value
          <Text style={styles.projectNameReveal}>
            Your project is called: {projectName}
          </Text>
        )}
      </View>

      <FooterNav onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  );
};

export default Spreadsheet;
