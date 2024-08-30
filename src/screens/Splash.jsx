import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signup');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.logoimage}>
        <Image
          style={styles.image}
          source={require('../images/111.png')}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.logo}>Kazmi</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  logoimage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
