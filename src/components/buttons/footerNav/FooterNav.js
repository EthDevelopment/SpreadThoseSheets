import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './FooterNav.scss';

const FooterNav = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.footerContainer}>
      <Text style={[styles.footerText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FooterNav;
