import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnback}>
        <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logocon}>
        <Text style={styles.logotxt}>Logo</Text>
      </View>
      <View style={styles.conticons}>
        <View style={styles.Iconscon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={styles.touch}>
            <View style={styles.Icon}>
              <Ionicons name="person" size={18} color="#50B248"></Ionicons>
            </View>
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Iconscon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Language')}
            style={styles.touch}>
            <View style={styles.Icon}>
              <Ionicons name="language" size={18} color="#50B248"></Ionicons>
            </View>
            <Text style={styles.text}>Language</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Iconscon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Package')}
            style={styles.touch}>
            <View style={styles.Icon}>
              <SimpleLineIcons
                name="diamond"
                size={20}
                color="#50B248"></SimpleLineIcons>
            </View>
            <Text style={styles.text}>Package</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Iconscon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={styles.touch}>
            <View style={styles.Icon}>
              <Ionicons
                name="share-social"
                size={18}
                color="#50B248"></Ionicons>
            </View>
            <Text style={styles.text}>Share with friends</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Iconscon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutInfo')}
            style={styles.touch}>
            <View style={styles.Icon}>
              <SimpleLineIcons
                name="info"
                size={18}
                color="#50B248"></SimpleLineIcons>
            </View>
            <Text style={styles.text}>About Info</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Iconscon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.touch}>
            <View style={styles.Icon}>
              <SimpleLineIcons
                name="logout"
                size={18}
                color="#50B248"></SimpleLineIcons>
            </View>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  touch: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    elevation: 5,
  },
  btnback: {
    width: '14%',
    marginLeft: 22,
    marginTop: 15,
  },
  conticons: {
    marginTop: 40,
    width: '100%',
    marginLeft: 20,
  },
  Iconscon: {
    padding: 10,
    width: '60%',
  },
  Icon: {
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  back: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#50B248',
    fontFamily: 'Inter',
    marginLeft: 15,
  },
  logocon: {
    width: 100,
    height: 100,
    borderColor: '#50B248',
    borderWidth: 2,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logotxt: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#50B248',
    textTransform: 'uppercase',
  },
});
