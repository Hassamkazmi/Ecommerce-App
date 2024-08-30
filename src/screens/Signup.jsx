import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import MainBtn from '../common/Mainbtn';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const registerUser = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const userData = {
      name,
      email,
      mobile,
      password,
    };

    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      Alert.alert('Success', 'User registered successfully');
      // navigation.navigate('Home');
    } catch (error) {
      console.log('Error saving data', error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        placeholder="Enter Name"
        style={styles.input}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Phone Number"
        keyboardType={'number-pad'}
        style={styles.input}
        value={mobile}
        onChangeText={txt => setMobile(txt)}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        value={password}
        onChangeText={txt => setPassword(txt)}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Enter Confirm Password"
        style={styles.input}
        value={confirmPassword}
        onChangeText={txt => setConfirmPassword(txt)}
        secureTextEntry={true}
      />

      <MainBtn titletext={'Register'} onPress={registerUser} />
      <Text
        style={styles.orLogin}
        onPress={() => {
          navigation.navigate('Signin');
        }}>
        Or Login
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    color: '#000',
    alignSelf: 'center',
    marginTop: 100,
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
  },
  orLogin: {
    alignSelf: 'center',
    marginTop: 40,
    fontWeight: '800',
    textDecorationLine: 'underline',
    fontSize: 20,
    color: '#000',
  },
});
