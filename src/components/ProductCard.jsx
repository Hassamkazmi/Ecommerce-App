import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../common/Color';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const ProductCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('ProductDetail', {product: item})
            }>
            <Image
              style={styles.image}
              source={{uri: item.image}}
              resizeMode="contain"
            />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productBrand}>{item.brand}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        key={2}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  card: {
    width: width / 2 - 20,
    backgroundColor: COLORS.grey,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 80,
    marginBottom: 10,
  },
  productName: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '100%',
    color: COLORS.dark,
  },
  productBrand: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
    color: COLORS.dark,
  },
  productPrice: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.orange,
    fontWeight: 'bold',
  },
});
