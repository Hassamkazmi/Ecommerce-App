import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import HomeSlider from '../components/HomeSlider';
import Category from '../components/Category';
import {smartWatch} from '../data/smartwatch';
import {headphones} from '../data/headphones';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [data, setData] = useState(smartWatch);

  const [selectedCategory, setSelectedCategory] = useState('Smart Watch');
  const handleUpdateCategory = newCategory => {
    if (newCategory === 'Smart Watch') {
      setData(smartWatch);
    } else if (newCategory === 'Headphones') {
      setData(headphones);
    }
    setSelectedCategory(newCategory);
  };
  return (
    <ScrollView>
      <View>
        <HomeSlider />
        <Category
          selectedCategory={selectedCategory}
          handleUpdateCategory={handleUpdateCategory}
        />
        <ProductCard data={data} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
