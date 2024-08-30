import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {category} from '../data/category';
import COLORS from '../common/Color';

const {width} = Dimensions.get('window');

const Category = ({selectedCategory, handleUpdateCategory}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              handleUpdateCategory(item.name);
            }}>
            <View style={styles.categoryContainer}>
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item.name && {
                    color: COLORS.orange,
                  },
                ]}>
                {item.name}
              </Text>
              {selectedCategory === item.name && (
                <View style={styles.underline} />
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal
        ItemSeparatorComponent={<View style={{paddingHorizontal: 12}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 'auto',
    paddingTop: 10,
  },
  categoryContainer: {
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    color: COLORS.dark,
  },
  underline: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
    width: '100%',
    marginTop: 2,
  },
});
