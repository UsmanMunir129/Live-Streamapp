import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Editteam1 = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{width: '100%'}}>
      <View style={styles.container}>
        <View style={styles.maincon}>
          <Text style={styles.contxt}>Create Team</Text>
        </View>
        <View>
          <Image
            style={styles.img1}
            source={require('../assets/Rectangle31.png')}
          />
        </View>
        <View style={styles.inputcon}>
          <View style={styles.headcon}>
            <Text>Team Name</Text>
            <View style={styles.plcinput}>
              <TextInput
                placeholder="Sluggers Atlanta"
                placeholderTextColor={'#50B248'}
                style={styles.placehldr}
              />
            </View>
          </View>
          <View style={styles.headcon}>
            <Text>Short Code</Text>
            <View style={styles.plcinput}>
              <TextInput
                placeholder="HRB"
                placeholderTextColor={'#50B248'}
                style={styles.placehldr}
              />
            </View>
          </View>
          <View style={styles.headcon}>
            <Text>Sport</Text>
            <View style={styles.plcinput}>
              <TextInput
                placeholder="Baseball"
                placeholderTextColor={'#50B248'}
                style={styles.placehldr}
              />
              <TouchableOpacity style={styles.icon}>
                <FontAwesome name="angle-down" size={22} color={'#50B248'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headcon}>
            <Text>Team Type</Text>
            <View style={styles.plcinput}>
              <TextInput
                placeholder="Other"
                placeholderTextColor={'#50B248'}
                style={styles.placehldr}
              />
              <TouchableOpacity style={styles.icon}>
                <FontAwesome name="angle-down" size={22} color={'#50B248'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headcon}>
            <Text>Age Group</Text>
            <View style={styles.plcinput}>
              <TextInput
                placeholder="Adult"
                placeholderTextColor={'#50B248'}
                style={styles.placehldr}
              />
              <TouchableOpacity style={styles.icon}>
                <FontAwesome name="angle-down" size={22} color={'#50B248'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headcon}>
            <Text>City</Text>
            <View style={styles.plcinput}>
              <TextInput
                placeholder="Old Trafford"
                placeholderTextColor={'#50B248'}
                style={styles.placehldr}
              />
            </View>
          </View>
          <View style={styles.btncon}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Manageteam')}
              style={styles.btnstyle}>
              <Text style={styles.btntxt}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Manageteam')}
              style={styles.btnstyle}>
              <Text style={styles.btntxt}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Editteam1;

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', width: '100%', paddingBottom: 34},
  maincon: {marginTop: 50, marginLeft: 25},
  contxt: {fontSize: 25, fontWeight: '500', color: '#000'},
  img1: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginTop: 35,
  },
  inputcon: {
    width: 308,
    marginTop: 10,
    alignSelf: 'center',
  },
  camicon: {
    justifyContent: 'center',
    position: 'absolute',
    right: 106,
    bottom: -8,
  },
  inputhead: {
    fontSize: 14,
    fontWeight: '400',
    color: '#727272',
  },
  placehldr: {
    paddingLeft: 15,
    height: 40,
    backgroundColor: '#EAEAEA',
    fontSize: 14,
    color: '#50B248',
  },
  headcon: {marginTop: 8},
  plcinput: {marginTop: 5},
  plcinput1: {marginTop: 5},
  icon: {
    position: 'absolute',
    right: 15,
    top: 8,
  },
  btncon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
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
