import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Card4 from '../components/Card4';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstcon}>
        <View>
          <Text style={styles.txt}>Hey!</Text>
          <Text style={styles.txt}>Daniel Pearl!</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image style={styles.img} source={require('../assets/Ellipse.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardcon}>
        <View style={{flexWrap: 'wrap'}}>
          <Card1 name="Manage Teams" />
          <Card2 name="Use as camera" />
          <Card4 name="Use as controller" />
          <Card3 name="Capture and score" />
        </View>
      </View>
      <View style={styles.bottomcon}>
        <View style={styles.imgscon}>
          <View>
            <Image
              style={styles.img1}
              resizeMode="cover"
              source={require('../assets/fb.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.img2}
              resizeMode="cover"
              source={require('../assets/YT.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.img2}
              resizeMode="cover"
              source={require('../assets/Twi.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default MainPage;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  firstcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 54,
  },
  img: {
    width: 39,
    height: 39,
  },
  txt: {
    color: '#000',
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  cardcon: {
    width: '100%',
    height: '70%',
    marginTop: 20,
    alignItems: 'center',
  },
  img1: {
    width: 29,
    height: 29,
    borderRadius: 20,
  },
  img2: {
    width: 29,
    height: 29,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  bottomcon: {
    bottom: -30,
    width: '100%',
    height: 62,
    backgroundColor: '#50B248',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  imgscon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '30%',
  },
});
