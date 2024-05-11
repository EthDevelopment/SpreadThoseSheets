// StartModal.js
import React from 'react';
import {Modal, View, Text, Pressable, TextInput} from 'react-native';
import styles from '../../../SpreadsheetScreen.scss';

const StartModal = ({
  visible,
  setVisible,
  setProjectName,
  handleSaveProject,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Enter Project Name:</Text>
          <TextInput
            style={styles.projectNameInput}
            onChangeText={setProjectName}
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
  );
};

export default StartModal;
