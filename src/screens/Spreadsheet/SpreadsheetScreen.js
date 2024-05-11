// Inmports
import React, {useState} from 'react';
import {Alert, Text, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Navigation
import FooterNav from '../../components/buttons/footerNav/FooterNav';
// Modals
import StartModal from './components/modal/clickToStart/StartModal';
import HeaderModal from './components/modal/column/columnHeaders/ColumnHeaderModal';
import ColumnAmountModal from './components/modal/column/columnQuantity/ColumnAmountModal';
import RowAmountModal from './components/row/rowQuantity/RowAmountModal';
import RowDataInput from './components/row/rowDataInput/rowDataInput';
// Stylesheet
import styles from './SpreadsheetScreen.scss';

const Spreadsheet = () => {
  const navigation = useNavigation();
  // Modal 1 -> Start project / Restart project
  const [isStartModalVisible, setIsStartModalVisible] = useState(false);
  const [hasShownStartModal, setHasShownStartModal] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleSaveProject = () => {
    if (validateProjectName(projectName)) {
      console.log('Project name:', projectName);
      setIsStartModalVisible(false);
      setButtonPressed(true); // Set button pressed state
    } else {
      Alert.alert('Error', 'Project name must be between 2 and 20 characters.');
    }
  };

  const validateProjectName = name => {
    return name.length >= 2 && name.length <= 20;
  };

  const handleRestart = () => {
    console.log('Project Name:', projectName);
    console.log('Column Headers:', columnHeaders);
    console.log('Column Amount:', numberOfColumns);

    setProjectName('');
    setButtonPressed(false);
    setIsModalColumnAmountVisible(false);
    setIsHeaderModalVisible(false);
  };

  const toggleModal = () => {
    if (!buttonPressed) {
      setIsStartModalVisible(!isStartModalVisible);
      showModalOnFirstRender(); // Call the function here
    }
  };

  const showModalOnFirstRender = () => {
    if (!hasShownStartModal) {
      setIsStartModalVisible(true);
      setHasShownStartModal(true);
    }
  };

  const [buttonPressed, setButtonPressed] = useState(false);

  // Modal 2 -> Column quantity
  const [numberOfColumns, setNumberOfColumns] = useState(2); // Manage in parent component
  const [isModalColumnAmountVisible, setIsModalColumnAmountVisible] =
    useState(false);
  const [columnHeaders, setColumnHeaders] = useState(Array(2).fill(''));

  const handleSetColumnAmount = () => {
    setIsModalColumnAmountVisible(true);
  };

  const handleSaveColumnCount = columnCount => {
    console.log('Column Amount:', columnCount);
    setNumberOfColumns(columnCount); // Update number of columns
  };

  // Modal 3 -> Column Header Input
  const [isHeaderModalVisible, setIsHeaderModalVisible] = useState(false);

  const handleSetHeaders = () => {
    setIsHeaderModalVisible(true);
  };

  const handleSaveHeaders = headers => {
    setColumnHeaders(headers);
    console.log('Column Headers:', headers);
    setIsHeaderModalVisible(false);
  };

  // Modal 4 -> Row Amount
  const [isRowAmountModalVisible, setIsRowAmountModalVisible] = useState(false);
  const [rowCount, setRowCount] = useState(1);

  const handleSetRowCount = count => {
    setRowCount(count);
    setIsRowAmountModalVisible(false);
  };

  // Modal 5 -> Row Data Input
  // Define state for row data modal
  const [isRowDataModalVisible, setIsRowDataModalVisible] = useState(false);
  // State variable to manage the selected column
  const [selectedColumn, setSelectedColumn] = useState('');
  const [rowData, setRowData] = useState([]);

  // Function to handle saving row data for the selected column
  const handleSaveRowData = data => {
    // Implement logic to save row data for the selected column
    console.log('Row data for column', selectedColumn, ':', data);
    // Update row data state
    setRowData([...rowData, {column: selectedColumn, data}]);
  };

  const handleFooterNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Section 1: First button */}
      <View style={styles.spreadSheetNameInput}>
        <View style={styles.centeredView}>
          <StartModal
            visible={isStartModalVisible}
            setVisible={setIsStartModalVisible}
            projectName={projectName}
            setProjectName={setProjectName}
            setButtonPressed={setButtonPressed}
            handleRestart={handleRestart}
            handleSaveProject={handleSaveProject}
            hasShownStartModal={hasShownStartModal}
          />
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={buttonPressed ? handleRestart : toggleModal}>
            <Text style={styles.textStyleClose}>
              {buttonPressed ? 'Click to Restart' : 'Click to start'}
            </Text>
          </Pressable>
          {!isStartModalVisible && projectName !== '' && (
            <View style={styles.spreadSheetNameInput}>
              <Text style={styles.projectNameReveal}>
                Project Name : {projectName}
              </Text>
            </View>
          )}
          {hasShownStartModal ? null : (
            <View>{/* Your components that rely on the modal state */}</View>
          )}
        </View>
      </View>

      {/* Section 2: Set Modal Columns */}
      {!isStartModalVisible && projectName !== '' && (
        <View style={styles.spreadSheetNameInput}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={handleSetColumnAmount}>
            <Text style={styles.textStyleClose}>Column amount</Text>
          </Pressable>
        </View>
      )}
      {/* Modal for column amount */}
      <ColumnAmountModal
        visible={isModalColumnAmountVisible}
        setVisible={setIsModalColumnAmountVisible}
        handleSaveColumnCount={handleSaveColumnCount} // Pass handleSaveColumnCount as a prop
      />

      {/* Section 3: Set Modal Headers */}
      {!isStartModalVisible && projectName !== '' && (
        <View style={styles.spreadSheetNameInput}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={handleSetHeaders}>
            <Text style={styles.textStyleClose}>Set Headers for Columns</Text>
          </Pressable>
        </View>
      )}

      {/* Header Modal */}
      <HeaderModal
        visible={isHeaderModalVisible}
        setVisible={setIsHeaderModalVisible}
        handleSaveHeaders={handleSaveHeaders}
        numberOfColumns={numberOfColumns} // Pass number of columns as prop
      />

      {/* Section 4: Set Modal Rows */}
      {!isStartModalVisible && projectName !== '' && (
        <View style={styles.spreadSheetNameInput}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setIsRowAmountModalVisible(true)}>
            <Text style={styles.textStyleClose}>Row amount</Text>
          </Pressable>
        </View>
      )}

      {/* Modal for row amount */}
      <RowAmountModal
        visible={isRowAmountModalVisible}
        setVisible={setIsRowAmountModalVisible}
        handleSaveRowCount={handleSetRowCount}
      />

      {/* Section 5: Provide Row data */}
      {!isStartModalVisible && projectName !== '' && (
        <View style={styles.spreadSheetNameInput}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setIsRowDataModalVisible(true)}>
            <Text style={styles.textStyleClose}>Provide Row Data</Text>
          </Pressable>
        </View>
      )}

      {/* Modal for row data */}
      <RowDataInput
        visible={isRowDataModalVisible}
        setVisible={setIsRowDataModalVisible}
        handleSaveRowCount={handleSetRowCount}
        handleSaveRowData={handleSaveRowData} // Pass function to save row data
        rowAmount={rowCount} // Pass row amount
        columnHeaders={columnHeaders} // Pass column headers
        projectName={projectName} // Pass project name
      />

      {/* Section 7: Footer navigation */}
      <FooterNav onPress={handleFooterNavigation} title="Home" />
    </View>
  );
};

export default Spreadsheet;
