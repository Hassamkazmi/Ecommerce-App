import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import MainBtn from '../common/Mainbtn';
import COLORS from '../common/Color';

const {width, height} = Dimensions.get('window');

const Contact = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../images/contact.jpg')}
        resizeMode="cover"
      />
      <View style={styles.contact}>
        <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>Contact US</Text>
        <TextInput
          placeholder="Subject"
          style={styles.input}
          placeholderTextColor={COLORS.dark}
        />
        <TextInput
          placeholder="Message"
          multiline={true}
          numberOfLines={8}
          style={styles.message}
          placeholderTextColor={COLORS.dark}
        />
        <MainBtn titletext="Submit" />
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  image: {
    height: height / 3,
    width: '100%',
  },
  contact: {
    width: '98%',
    margin: 10,
  },
  input: {
    width: '98%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    paddingLeft: 20,
    marginRight: 10,
    color: COLORS.dark,
  },
  message: {
    width: '98%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 20,
    marginRight: 10,
    textAlignVertical: 'top',
    color: COLORS.dark,
  },
});
