import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import COLORS from './Color';

const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>KAZMI</Text>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allows the container to take up the full available space
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  logo: {
    fontSize: 24, // Adjust font size as needed
    fontWeight: 'bold', // Makes the text bold
    color: COLORS.red, // Set the color of the text
  },
});
