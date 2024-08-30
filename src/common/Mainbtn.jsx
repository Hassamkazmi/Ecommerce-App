import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from './Color';
const MainBtn = ({titletext, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.font}>{titletext}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    margin: 20,
    borderRadius: 5,
    width: '90%',
    height: 50,
    alignItems: 'center',
  },
  font: {
    color: COLORS.light,
    fontSize: 20,
    padding: 10,
    fontWeight: '800',
  },
});

export default MainBtn;
