import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Spreadsheetbtn = ({onPress}) => {
  const navigation = useNavigation();

  return (
    <Button
      title="Go to Spreadsheet"
      onPress={() => navigation.navigate('Spreadsheet')}
    />
  );
};

export default Spreadsheetbtn;
