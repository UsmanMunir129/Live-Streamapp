import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

const Settings = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.btnback}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={{width: 80}}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logocon}>
          <Text style={styles.logotxt}>DP</Text>
        </View>
        <View style={styles.Name}>
          <Text style={styles.Nametxt}>Player Name</Text>
        </View>
        <View style={styles.inputs}>
          <View style={styles.input}>
            <TextInput
              style={styles.styl}
              placeholder="Name"
              placeholderTextColor="#747688"></TextInput>
            <View style={styles.abscon}>
              <Text style={styles.abstxt}>Full Name</Text>
            </View>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.styl}
              placeholder="User123@email.com"
              placeholderTextColor="#747688"></TextInput>
            <View style={styles.abscon}>
              <Text style={styles.abstxt}>Email</Text>
            </View>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.styl}
              placeholder="Password"
              placeholderTextColor="#747688"></TextInput>
            <View style={styles.abscon}>
              <Text style={styles.abstxt}>Password</Text>
            </View>
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.styl}
              placeholder="https://youtube@Chingyan11.com"
              placeholderTextColor="#747688"></TextInput>
            <View style={styles.abscon}>
              <Text style={styles.abstxt}>Add Youtube</Text>
            </View>
          </View>
        </View>
        <View style={styles.btncon}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    paddingBottom: 107,
  },
  btnback: {
    width: '14%',
    marginLeft: 22,
    marginTop: 15,
  },
  back: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
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
  inputs: {width: '100%', alignItems: 'center', marginTop: 20},
  input: {
    marginTop: 25,
  },
  logotxt: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#000',
    textTransform: 'uppercase',
  },
  Name: {
    alignItems: 'center',
  },
  Nametxt: {
    fontWeight: '600',
    fontSize: 15,
    fontFamily: 'Inter',
    color: '#50B248',
    marginTop: 15,
  },
  styl: {
    height: 50,
    fontSize: 16,
    color: '#747688',
    alignItems: 'center',
    width: 297,
    borderWidth: 3,
    borderColor: '#50B248',
    paddingLeft: 15,
  },
  abscon: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    width: 65,
    marginLeft: 19,
    marginTop: -5,
  },
  abstxt: {
    color: '#000',
    fontSize: 9,
    fontWeight: '500',
    height: 12,
    alignSelf: 'center',
  },
  btncon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  btn: {
    width: 117,
    height: 46,
    backgroundColor: '#50B248',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btntxt: {color: '#fff', fontSize: 18, fontWeight: '500'},
});
