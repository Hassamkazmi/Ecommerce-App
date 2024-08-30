import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Product from '../screens/Product';
import Contact from '../screens/Contact';
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoTitle from '../common/HeaderLogo';
import COLORS from '../common/Color';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.grey,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          padding: 5,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="product-hunt" size={size} color={color} /> // Use appropriate icon name
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: COLORS.orange},

                {padding: 14},
                {position: 'absolute'},
                {
                  borderRadius: 50,
                },
              ]}>
              <Icon name="shopping-cart" size={size * 1.5} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="address-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  iconContainer: {
    bottom: 30,
  },
});
