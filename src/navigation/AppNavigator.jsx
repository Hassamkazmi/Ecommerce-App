import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import BottomTab from './BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import productDetail from '../screens/productDetail';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setIsLoggedIn(true);
      }
    };

    checkUserLoggedIn();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Main'}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ProductDetail" component={productDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
