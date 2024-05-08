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

  // State variables
  const [isStartModalVisible, setIsStartModalVisible] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);
  const [isHeaderModalVisible, setIsHeaderModalVisible] = useState(false);

  // Functions related to the first button
  const toggleModal = () => {
    if (!buttonPressed) {
      setIsStartModalVisible(!isStartModalVisible);
      showModalOnFirstRender(); // Call the function here
    }
  };

  const showModalOnFirstRender = () => {
    if (!hasShownModal) {
      setIsStartModalVisible(true);
      setHasShownModal(true);
    }
  };

  const handleSaveProject = () => {
    if (validateProjectName(projectName)) {
      console.log('Project name:', projectName);
      setIsStartModalVisible(false);
      setButtonPressed(true); // Set button pressed state
    } else {
      Alert.alert('Error', 'Project name must be between 2 and 10 characters.');
    }
  };

  const handleRestart = () => {
    setProjectName(''); // Clear project name
    setButtonPressed(false); // Reset button state
  };

  const validateProjectName = name => {
    return name.length >= 2 && name.length <= 10;
  };

  // Functions related to the second button
  const handleSetHeaders = () => {
    setIsHeaderModalVisible(true);
  };

  // Footer navigation
  const handleFooterNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Section 1: First button */}
      <View style={styles.spreadSheetNameInput}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isStartModalVisible}
            onRequestClose={() => setIsStartModalVisible(false)}>
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
            onPress={buttonPressed ? handleRestart : toggleModal}>
            <Text style={styles.textStyleClose}>
              {buttonPressed ? 'Restart' : 'Click to start'}
            </Text>
          </Pressable>
          {!isStartModalVisible && projectName !== '' && (
            <View style={styles.spreadSheetNameInput}>
              <Text style={styles.projectNameReveal}>
                Your project is called: {projectName}
              </Text>
            </View>
          )}
          {hasShownModal ? null : (
            <View>{/* Your components that rely on the modal state */}</View>
          )}
        </View>
      </View>

      {/* Section 2: Second button */}
      {!isStartModalVisible && projectName !== '' && (
        <View style={styles.spreadSheetNameInput}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={handleSetHeaders}>
            <Text style={styles.textStyleClose}>Set Headers for Columns</Text>
          </Pressable>
        </View>
      )}

      {/* Section 3: Footer navigation */}
      <FooterNav onPress={handleFooterNavigation} title="Home" />
    </View>
  );
};

export default Spreadsheet;
