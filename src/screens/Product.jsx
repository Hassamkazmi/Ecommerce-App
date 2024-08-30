import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import ProductCard from '../components/ProductCard';
import {smartWatch} from '../data/smartwatch';
import {headphones} from '../data/headphones';
import COLORS from '../common/Color';

const Product = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Smart Watches</Text>
        <ProductCard data={smartWatch} />

        <Text style={styles.title}>Headphones</Text>
        <ProductCard data={headphones} />
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  title: {
    color: COLORS.primary,
    margin: 5,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
