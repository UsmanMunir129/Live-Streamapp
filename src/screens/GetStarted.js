import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.conimg}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require('../assets/Group1.png')}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        activeOpacity={0.5}
        style={styles.btn}>
        <Text style={styles.txt}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  conimg: {
    marginTop: 120,
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 220,
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    marginTop: '82%',
    backgroundColor: '#50B248',
    borderRadius: 15,
    alignItems: 'center',
    height: 50,
    width: '87%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
