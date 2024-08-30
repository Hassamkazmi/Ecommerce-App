import {StyleSheet, Text, View, TextInput, Alert, Image} from 'react-native';
import React, {useState} from 'react';
import MainBtn from '../common/Mainbtn';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../common/Color';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const login = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        if (
          parsedUserData.email === email &&
          parsedUserData.password === password
        ) {
          Alert.alert('Success', 'Login successful');
          navigation.navigate('Main');
        } else {
          Alert.alert('Error', 'Invalid email or password');
        }
      } else {
        Alert.alert('Error', 'No user found. Please sign up first.');
      }
    } catch (error) {
      console.log('Error retrieving data', error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoimage}>
        <Image
          style={styles.image}
          source={require('../images/107.jpg')}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={txt => setEmail(txt)}
        placeholderTextColor={COLORS.dark}
      />

      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        value={password}
        onChangeText={txt => setPassword(txt)}
        secureTextEntry={true}
        placeholderTextColor={COLORS.dark}
      />

      <MainBtn titletext={'Login'} onPress={login} />
      <Text
        style={styles.orLogin}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Or Sign Up
      </Text>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    color: '#000',
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: '800',
    marginBottom: 50,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    paddingLeft: 20,
    color: '#000',
  },
  orLogin: {
    alignSelf: 'center',
    marginTop: 40,
    fontWeight: '800',
    textDecorationLine: 'underline',
    fontSize: 20,
    color: '#000',
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
