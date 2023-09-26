import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Card3 = props => {
  const navigation = useNavigation({navigation});
  return (
    <View style={{padding: 14}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('page1')}
        style={styles.cardtouch}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.img1}
            source={require('../assets/Ellipse7.png')}
          />
        </View>
        <Text style={styles.cardtxt}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card3;

const styles = StyleSheet.create({
  img1: {
    width: 80,
    height: 80,
    marginTop: 15,
  },
  cardtouch: {
    width: 145,
    height: 187,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  cardtxt: {
    color: '#000',
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Inter',
    marginLeft: 20,
    marginTop: 15,
  },
});
