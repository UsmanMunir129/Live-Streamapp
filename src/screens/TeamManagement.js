import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

const TeamManagement = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Manageteam')}
          style={{position: 'absolute', right: 24, top: 17}}>
          <Text style={{color: '#50B248', fontSize: 16, fontWeight: '500'}}>
            save
          </Text>
        </TouchableOpacity>
        <View style={styles.maincon}>
          <Text style={styles.contxt}>Harrison Bomber</Text>
        </View>
        <View style={{marginTop: 8}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Addingplayer')}
            style={styles.btn1}>
            <Text style={styles.btn1txt}>+ Add Player</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Addingplayer')}
            style={styles.btn1}>
            <Text style={styles.btn1txt}>+ Add Player</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 18}}>
          <View style={styles.cont2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlayerDetails')}
              style={styles.button}>
              <Image
                style={styles.img1}
                source={require('../assets/Ellipse106.png')}
              />
              <View style={styles.btn1con}>
                <Text style={styles.btn1txt}>Kevin</Text>
                <Text style={styles.text2}>Right Hand Player</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addingplayer')}
              style={styles.btn2con}>
              <Octicons name="pencil" size={19} color={'#50B248'} />
            </TouchableOpacity>
          </View>
          <View style={styles.cont2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlayerDetails')}
              style={styles.button}>
              <Image
                style={styles.img1}
                source={require('../assets/Ellipse111.png')}
              />
              <View style={styles.btn1con}>
                <Text style={styles.btn1txt}>Dean J</Text>
                <Text style={styles.text2}>Right Hand Player</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addingplayer')}
              style={styles.btn2con}>
              <Octicons name="pencil" size={19} color={'#50B248'} />
            </TouchableOpacity>
          </View>
          <View style={styles.cont2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlayerDetails')}
              style={styles.button}>
              <Image
                style={styles.img1}
                source={require('../assets/Ellipse105.png')}
              />
              <View style={styles.btn1con}>
                <Text style={styles.btn1txt}>Kevin</Text>
                <Text style={styles.text2}>Right Hand Player</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addingplayer')}
              style={styles.btn2con}>
              <Octicons name="pencil" size={19} color={'#50B248'} />
            </TouchableOpacity>
          </View>
          <View style={styles.cont2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlayerDetails')}
              style={styles.button}>
              <Image
                style={styles.img1}
                source={require('../assets/Ellipse114.png')}
              />
              <View style={styles.btn1con}>
                <Text style={styles.btn1txt}>R Smith</Text>
                <Text style={styles.text2}>Right Hand Player</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addingplayer')}
              style={styles.btn2con}>
              <Octicons name="pencil" size={19} color={'#50B248'} />
            </TouchableOpacity>
          </View>
          <View style={styles.cont2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlayerDetails')}
              style={styles.button}>
              <Image
                style={styles.img1}
                source={require('../assets/Ellipse115.png')}
              />
              <View style={styles.btn1con}>
                <Text style={styles.btn1txt}>Embrose</Text>
                <Text style={styles.text2}>Right Hand Player</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addingplayer')}
              style={styles.btn2con}>
              <Octicons name="pencil" size={19} color={'#50B248'} />
            </TouchableOpacity>
          </View>
          <View style={styles.cont2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlayerDetails')}
              style={styles.button}>
              <Image
                style={styles.img1}
                source={require('../assets/Ellipse117.png')}
              />
              <View style={styles.btn1con}>
                <Text style={styles.btn1txt}>Randy</Text>
                <Text style={styles.text2}>Right Hand Player</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addingplayer')}
              style={styles.btn2con}>
              <Octicons name="pencil" size={19} color={'#50B248'} />
            </TouchableOpacity>
          </View>
          <View style={styles.cont2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlayerDetails')}
              style={styles.button}>
              <Image
                style={styles.img1}
                source={require('../assets/Ellipse118.png')}
              />
              <View style={styles.btn1con}>
                <Text style={styles.btn1txt}>John</Text>
                <Text style={styles.text2}>Right Hand Player</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addingplayer')}
              style={styles.btn2con}>
              <Octicons name="pencil" size={19} color={'#50B248'} />
            </TouchableOpacity>
          </View>
          <View style={styles.cont2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlayerDetails')}
              style={styles.button}>
              <Image
                style={styles.img1}
                source={require('../assets/Ellipse106.png')}
              />
              <View style={styles.btn1con}>
                <Text style={styles.btn1txt}>Kevin</Text>
                <Text style={styles.text2}>Right Hand Player</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addingplayer')}
              style={styles.btn2con}>
              <Octicons name="pencil" size={19} color={'#50B248'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TeamManagement;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingBottom: 30,
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
    marginTop: 10,
    elevation: 10,
  },
  cont2: {
    width: 301,
    height: 54,
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 15,
    borderColor: '#50B248',
    borderWidth: 1,
  },
  btn1txt: {fontSize: 15, fontWeight: '400', color: '#000'},
  text2: {fontSize: 12, fontWeight: '400', color: '#50B248'},
  button: {flexDirection: 'row', width: '100%'},
  btn1con: {marginTop: 7, marginLeft: 18},
  btn2con: {position: 'absolute', right: 20, alignSelf: 'center'},
  img1: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginLeft: 7,
  },
});
