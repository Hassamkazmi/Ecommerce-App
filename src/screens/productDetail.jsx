import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import COLORS from '../common/Color';
const {width, height} = Dimensions.get('window');

const ProductDetail = ({route}) => {
  const {product} = route.params;

  console.log(product, 'product ---');
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* <Image source={{uri: product.image}} style={styles.image} /> */}
        <FlatList
          data={product.images}
          // keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  width: width,
                  height: 300,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  disabled={true}
                  style={{
                    width: '98%',
                    height: '98%',
                    borderRadius: 10,
                    overflow: 'hidden',
                  }}>
                  <View style={styles.imagecontainer}>
                    <Image
                      style={styles.image}
                      source={{uri: product.images[index]}}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={styles.flexcard}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productBrand}>{product.brand}</Text>
        </View>
        <Text style={styles.productPrice}>${product.price}</Text>
        {/* <Text style={styles.productDescription}>{product.details}</Text> */}
        <Text style={styles.productDescription}>{product.review}</Text>
        <TouchableOpacity style={styles.addcart}>
          <Text style={styles.carttext}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productBrand: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: 'black',
  },
  flexcard: {},
  addcart: {
    backgroundColor: COLORS.primary,
    width: '98%',
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  carttext: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
  },
});
