import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../common/Color';
import {slider} from '../data/slider';

const {height, width} = Dimensions.get('window');

const HomeSlider = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={slider}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index}) => {
          return (
            <View
              key={index}
              style={{
                width: width,
                height: height / 8 + 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                disabled={true}
                style={{
                  width: '98%',
                  height: '98%',
                  backgroundColor: COLORS.primary,
                  borderRadius: 10,
                  overflow: 'hidden',
                }}>
                <View style={styles.imagecontainer}>
                  <View>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.description}>{item?.description}</Text>
                  </View>
                  <Image
                    style={styles.image}
                    source={{uri: item.image}}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeSlider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: height / 4,
  },
  image: {
    width: '80%',
    height: '90%',
    marginRight: 10,
  },
  imagecontainer: {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'end',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: COLORS.white,
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: COLORS.white,
    margin: 5,
    fontSize: 12,
    fontWeight: '400',
    width: 150,
  },
});
