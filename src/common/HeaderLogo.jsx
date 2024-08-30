import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import COLORS from './Color';

const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoimage}>
        <Image
          style={styles.image}
          source={require('../images/111.png')}
          resizeMode="cover"
        />
        <Text style={styles.logo}>KAZMI</Text>
      </View>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1, // Allows the container to take up the full available space
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },

  image: {
    height: 50,
    width: 70,
  },
  logoimage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  logo: {
    fontSize: 24, // Adjust font size as needed
    fontWeight: 'bold', // Makes the text bold
    color: COLORS.orange, // Set the color of the text
  },
});
