import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Manageteam = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.maincon}>
        <Text style={styles.contxt}>My Teams</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('CreateTeam')}
        style={styles.btn1}>
        <Text style={styles.btn1txt}>+ Create team</Text>
      </TouchableOpacity>
      <View style={styles.cont2}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TeamManagement')}
          style={{flexDirection: 'row', width: '100%'}}>
          <Image
            style={styles.img1}
            source={require('../assets/Rectangle31.png')}
          />
          <View style={styles.btn1con}>
            <Text style={styles.btn1txt}>Sluggers Atlanta</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Editteam1')}
          style={styles.btn2con}>
          <MaterialCommunityIcons
            name="pencil-circle"
            size={33}
            color={'#50B248'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cont2}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TeamManagement')}
          style={{flexDirection: 'row', width: '100%'}}>
          <Image
            style={styles.img1}
            source={require('../assets/Rectangle32.png')}
          />
          <View style={styles.btn1con}>
            <Text style={styles.btn1txt}>Velocity Bat</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Editteam1')}
          style={styles.btn2con}>
          <MaterialCommunityIcons
            name="pencil-circle"
            size={33}
            color={'#50B248'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Manageteam;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  img1: {
    width: 80,
    height: 80,
  },
  maincon: {marginTop: 50, marginLeft: 25},
  contxt: {fontSize: 25, fontWeight: '500', color: '#000'},
  btn1: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: 308,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 43,
    elevation: 10,
  },
  btn1txt: {fontSize: 15, fontWeight: '400', color: '#000'},
  cont2: {
    width: 308,
    height: 83,
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 32,
    borderRadius: 15,
    elevation: 10,
  },
  btn1con: {marginTop: 13, marginLeft: -5},
  btn2con: {position: 'absolute', right: 20, alignSelf: 'center'},
});
