import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Intro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 120}}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require('../assets/Rectangle7.png')}
        />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
          <Text style={styles.skip}>SKIP</Text>
        </TouchableOpacity>

        <View style={styles.bars}>
          <View style={styles.bar1}></View>
          <View style={styles.bar2}></View>
        </View>
        <View style={styles.buttonnext}>
          <TouchableOpacity onPress={() => navigation.navigate('Intro1')}>
            <Text style={styles.next}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  img: {
    width: 360,
    height: 280,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  bars: {
    height: '100%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bar1: {
    backgroundColor: '#50B248',
    width: 62,
    height: 10,
    borderRadius: 9,
  },
  bar2: {
    backgroundColor: '#9C9C9C',
    width: 22,
    height: 10,
    borderRadius: 9,
  },
  skip: {
    color: '#9C9C9C',
    fontSize: 17,
    fontWeight: '600',
  },
  buttonnext: {
    backgroundColor: '#50B248',
    width: 80,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {color: '#fff', fontSize: 17, fontWeight: '600'},
});
