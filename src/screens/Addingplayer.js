import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Addingplayer = ({navigation}) => {
  const [left, setLeft] = useState(false);
  const [both, setBoth] = useState(false);
  const [right, setRight] = useState(false);
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(false);

  const batcheck = value => {
    if (value == 'Left') {
      setLeft(true);
      setBoth(false);
      setRight(false);
    } else if (value == 'Both') {
      setLeft(false);
      setBoth(true);
      setRight(false);
    } else if (value == 'Right') {
      setRight(true);
      setLeft(false);
      setBoth(false);
    }
  };
  const bowlcheck = value => {
    if (value == 'Left') {
      setChecked(true);
      setActive(false);
    } else if (value == 'Right') {
      setChecked(false);
      setActive(true);
    }
  };
  return (
    <ScrollView contentContainerStyle={{width: '100%'}}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.img1}
            source={require('../assets/Ellipse105.png')}
          />
          <TouchableOpacity style={styles.camicon}>
            <FontAwesome name="camera" size={16} color={'#50B248'} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <View style={styles.input}>
            <TextInput
              style={styles.styl}
              placeholderTextColor="#747688"></TextInput>
            <View style={styles.abscon}>
              <Text style={styles.abstxt}>First Name</Text>
            </View>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.styl}
              placeholderTextColor="#747688"></TextInput>
            <View style={styles.abscon}>
              <Text style={styles.abstxt}>Last Name</Text>
            </View>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.styl}
              placeholderTextColor="#747688"></TextInput>
            <View style={styles.abscon}>
              <Text style={styles.abstxt}>Jersey No</Text>
            </View>
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.styl}
              placeholderTextColor="#747688"></TextInput>
            <View style={styles.abscon}>
              <Text style={styles.abstxt}>Player Email</Text>
            </View>
          </View>
        </View>
        <View style={styles.options}>
          <View>
            <Text style={styles.optext}>Bats</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={
                () => batcheck('Left')
                //  setFocus(!focus)
              }
              style={[
                styles.opn,
                {backgroundColor: left ? '#50B248' : '#B5B5B5'},
              ]}>
              <Text style={styles.text}>Left</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={
                () => batcheck('Both')
                //  setCheck(!check)
              }
              style={[
                styles.opn,
                styles.optn,
                {backgroundColor: both ? '#50B248' : '#B5B5B5'},
              ]}>
              <Text style={styles.text}>Both</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={
                () => batcheck('Right')
                // setChecks(!checks)
              }
              style={[
                styles.opn,
                {backgroundColor: right ? '#50B248' : '#B5B5B5'},
              ]}>
              <Text style={styles.text}>Right</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.options}>
          <View>
            <Text style={styles.optext}>Bowl</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={
                () => bowlcheck('Left')
                // setChecked(!checked)
              }
              style={[
                styles.opn,
                styles.optn,
                {backgroundColor: checked ? '#50B248' : '#B5B5B5'},
              ]}>
              <Text style={styles.text}>Left</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={
                () => bowlcheck('Right')
                // setActive(!active)
              }
              style={[
                styles.opn,
                {backgroundColor: active ? '#50B248' : '#B5B5B5'},
              ]}>
              <Text style={styles.text}>Right</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btncon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TeamManagement')}
            style={styles.btnstyle}>
            <Text style={styles.btntxt}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TeamManagement')}
            style={styles.btnstyle}>
            <Text style={styles.btntxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Addingplayer;

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', width: '100%', paddingBottom: 34},
  img1: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginTop: 80,
  },
  camicon: {
    justifyContent: 'center',
    position: 'absolute',
    right: 125,
    bottom: 0,
  },
  inputs: {width: '100%', alignItems: 'center', marginTop: 20},
  input: {
    marginTop: 25,
  },
  styl: {
    height: 40,
    fontSize: 12,
    color: '#747688',
    alignItems: 'center',
    width: 297,
    borderWidth: 2,
    borderColor: '#50B248',
    paddingLeft: 15,
    justifyContent: 'center',
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
  text: {fontSize: 11, fontWeight: '500', color: '#000'},
  btncon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80,
    width: 297,
    alignSelf: 'center',
  },
  opn: {
    width: 59,
    height: 26,
    backgroundColor: '#B5B5B5',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optn: {
    marginHorizontal: 7,
  },
  optext: {fontSize: 14, fontWeight: '500', color: '#000'},
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 297,
    alignSelf: 'center',
    marginTop: 20,
  },

  btnstyle: {
    width: 85,
    height: 36,
    backgroundColor: '#50B248',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btntxt: {fontSize: 14, fontWeight: '500', color: '#fff'},
});
