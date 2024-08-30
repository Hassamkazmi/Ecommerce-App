import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../common/Color';

const Profile = () => {
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          setUserName(parsedUserData.name);
        }
      } catch (error) {
        console.log('Error retrieving data', error);
      }
    };

    fetchUserData();
  }, []);

  const logout = async () => {
    navigation.navigate('Signin');
  };

  const deleteAccount = async () => {
    await AsyncStorage.removeItem('user');
    navigation.reset({
      index: 0,
      routes: [{name: 'Signin'}],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {userName}!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.dark,
    fontWeight: 'bold',
  },
};

export default Profile;
