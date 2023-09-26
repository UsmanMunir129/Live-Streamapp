import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
const FirstRoute = () => {
  const navigation = useNavigation();
  return (
    <ScrollView scrollEnabled contentContainerStyle={styles.tabscrol1}>
      <View style={styles.tabview1}>
        <View style={styles.tabview2}>
          <Text style={styles.viewtext}>vs Tawei</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={styles.tabbtn1}>
            <Text style={styles.btntxt1}>Play by Play</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabview2}>
          <Text style={styles.viewtext}>3/20 @9:00am</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={[styles.tabbtn1, {backgroundColor: '#C5E6C3'}]}>
            <Text style={[styles.btntxt1, {color: '#CECECE'}]}>My Clips</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabview1}>
        <View style={styles.tabview2}>
          <Text style={styles.viewtext}>vs Tawei</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={styles.tabbtn1}>
            <Text style={styles.btntxt1}>Play by Play</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabview2}>
          <Text style={styles.viewtext}>3/20 @9:00am</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={[styles.tabbtn1, {backgroundColor: '#C5E6C3'}]}>
            <Text style={[styles.btntxt1, {color: '#CECECE'}]}>My Clips</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabview1}>
        <View style={styles.tabview2}>
          <Text style={styles.viewtext}>vs Tawei</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={styles.tabbtn1}>
            <Text style={styles.btntxt1}>Play by Play</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabview2}>
          <Text style={styles.viewtext}>3/20 @9:00am</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={[styles.tabbtn1, {backgroundColor: '#C5E6C3'}]}>
            <Text style={[styles.btntxt1, {color: '#CECECE'}]}>My Clips</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabview1}>
        <View style={styles.tabview2}>
          <Text style={styles.viewtext}>vs Tawei</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={styles.tabbtn1}>
            <Text style={styles.btntxt1}>Play by Play</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabview2}>
          <Text style={styles.viewtext}>3/20 @9:00am</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={[styles.tabbtn1, {backgroundColor: '#C5E6C3'}]}>
            <Text style={[styles.btntxt1, {color: '#CECECE'}]}>My Clips</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const SecondRoute = () => (
  <ScrollView contentContainerStyle={{width: '100%'}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 40,
        alignSelf: 'center',
        borderBottomColor: '#CECECE',
        borderBottomWidth: 2,
        alignItems: 'center',
        paddingHorizontal: 12,
      }}>
      <Text style={styles.coltext}>Opponents</Text>
      <Text style={styles.coltext}>PA</Text>
      <Text style={styles.coltext}>AB</Text>
      <Text style={styles.coltext}>AVG</Text>
      <Text style={styles.coltext}>OBP</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
      }}>
      <View
        style={{
          borderRightWidth: 2,
          borderColor: '#CECECE',
          height: 240,
          width: '30%',
        }}></View>
      <View
        style={{
          borderRightWidth: 2,
          borderColor: '#CECECE',
          height: 240,
          width: '16%',
        }}></View>
      <View
        style={{
          borderRightWidth: 2,
          borderColor: '#CECECE',
          height: 240,
          width: '17%',
        }}></View>
      <View
        style={{
          borderRightWidth: 2,
          borderColor: '#CECECE',
          height: 240,
          width: '19%',
        }}></View>
    </View>
  </ScrollView>
);
const ThirdRoute = () => (
  <ScrollView contentContainerStyle={{width: '100%'}}>
    <View style={{paddingBottom: 20}}></View>
  </ScrollView>
);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#FFFFFF'}}
    style={{
      backgroundColor: '#fff',
      width: '100%',
      borderBottomWidth: 2,
      borderBottomColor: '#CECECE',
      alignSelf: 'center',
      elevation: 0,
      paddingHorizontal: 10,
      height: '15%',
    }}
    labelStyle={{fontSize: 11, fontWeight: '600'}}
    activeColor="#50B248"
    inactiveColor="#CDCDCD"

    // indicatorContainerStyle={{acbackgroundColor: '#000'}}
    // tabStyle={{backgroundColor: 'red'}}
  />
);
// const FirstRoute1 = () => {
//   return (
//     <View>
//       <Text>fhfg</Text>
//     </View>
//   );
// };
// const SecondRoute2 = () => <View style={{paddingBottom: 20}}></View>;
// const ThirdRoute3 = () => <View style={{paddingBottom: 20}}></View>;
// const renderScene1 = SceneMap({
//   f: FirstRoute,
//   s: SecondRoute,
//   t: ThirdRoute,
// });
// const renderTabBar1 = props => (
//   <TabBar
//     {...props}
//     indicatorStyle={{backgroundColor: '#fff'}}
//     style={{
//       backgroundColor: '#fff',
//       width: '90%',
//       borderBottomWidth: 2,
//       borderBottomColor: '#CECECE',
//       alignSelf: 'center',
//     }}
//     labelStyle={{fontSize: 11, fontWeight: '600'}}
//     activeColor="#50B248"
//     inactiveColor="#CDCDCD"
//     // indicatorContainerStyle={{backgroundColor: '#000'}}
//     // tabStyle={{backgroundColor: 'red'}}
//   />
// );
const PlayerDetails = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Highlights'},
    {key: 'second', title: 'Offense'},
    {key: 'third', title: 'Defense'},
  ]);

  const [index1, setIndex1] = React.useState(0);
  const [routes1] = React.useState([
    {key: 'first1', title: 'Batting'},
    {key: 'second2', title: 'Offense'},
    {key: 'third3', title: 'Defense'},
  ]);

  const [video, setVideo] = useState(false);
  const [stats, setStats] = useState(false);
  const [data, setData] = useState('Video');
  const check = value => {
    if (value == 'Left') {
      setVideo(true);
      setData('Video');
      setStats(false);
    } else if (value == 'Right') {
      setVideo(false);
      setData('Stats');
      setStats(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.txt1}>Back</Text>
        </TouchableOpacity>
        <View style={styles.cont2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={styles.btn2con}>
            <Octicons name="pencil" size={19} color={'#50B248'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <MaterialCommunityIcons
              name="share-outline"
              size={22}
              color={'#50B248'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cont4}>
        <Image
          style={styles.img1}
          source={require('../assets/Rectangle60.png')}
        />
        <View style={styles.cont3}>
          <Text style={styles.txt2}>Jack K Freed</Text>
          <Text style={styles.txt3}>Sluggers Atlanta</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={styles.btnmore}>
            <Text style={styles.txt4}>View more teams</Text>
          </TouchableOpacity>
          <View style={styles.cont5}>
            <View style={styles.cont6}>
              <Ionicons name="location-outline" color={'#50B248'} size={18} />
              <View style={styles.cont7}>
                <Text style={styles.txt5}>Tokyo</Text>
              </View>
            </View>
            <View style={styles.cont6}>
              <View style={styles.cont8}>
                <Text style={styles.txt6}>Hand</Text>
              </View>
              <Text style={styles.txt7}>R</Text>
            </View>
            <View style={styles.cont6}>
              <View style={styles.cont8}>
                <Text style={styles.txt6}>Throws</Text>
              </View>
              <Text style={styles.txt7}>R</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cont9}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => check('Left')}
          style={[
            styles.btn3,
            {backgroundColor: data == 'Video' ? '#50B248' : '#B5B5B5'},
          ]}>
          <Text>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => check('Right')}
          style={[
            styles.btn3,
            {marginLeft: 5},
            {backgroundColor: stats ? '#50B248' : '#B5B5B5'},
          ]}>
          <Text>Stats</Text>
        </TouchableOpacity>
      </View>
      <View>
        {data == 'Video' ? (
          <View style={styles.tabvw}>
            <TabView
              swipeEnabled={true}
              renderTabBar={renderTabBar}
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
            />
          </View>
        ) : data == 'Stats' ? (
          <View style={styles.tabvw}>
            <TabView
              swipeEnabled={true}
              renderTabBar={renderTabBar}
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
            />
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};
export default PlayerDetails;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
  back: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },

  txt1: {
    color: '#50B248',
    fontSize: 16,
    fontWeight: '500',
  },
  container1: {
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 25,
    justifyContent: 'space-between',
  },
  cont2: {
    flexDirection: 'row',
  },
  btn2con: {
    marginHorizontal: 25,
  },
  cont3: {
    marginLeft: 19,
    width: 185,
  },
  img1: {
    width: 100,
    height: 120,
  },
  txt2: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    marginTop: 7,
  },
  txt3: {
    fontSize: 12,
    fontWeight: '500',
    color: '#50B248',
  },
  cont4: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    marginTop: 40,
  },
  cont5: {
    flexDirection: 'row',
    marginTop: 13,
    justifyContent: 'space-between',
  },
  btnmore: {
    height: 23,
    backgroundColor: '#50B248',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 11,
  },
  cont6: {
    flexDirection: 'row',
  },
  txt4: {
    fontSize: 10,
    fontWeight: '500',
    color: '#fff',
  },
  txt5: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  txt6: {
    fontSize: 12,
    fontWeight: '500',
    color: '#50B248',
  },
  txt7: {
    color: '#000',
    fontSize: 15,
    paddingLeft: 5,
    fontWeight: '500',
  },
  btn3: {
    backgroundColor: '#50B248',
    width: 85,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cont7: {justifyContent: 'center'},
  cont8: {justifyContent: 'flex-end'},
  cont9: {
    width: 310,
    alignSelf: 'center',
    marginTop: 90,
    flexDirection: 'row',
  },
  tabvw: {
    height: 330,
    width: 310,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#CECECE',
    elevation: 8,
  },
  tabscrol1: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingBottom: 15,
  },
  tabview1: {
    backgroundColor: '#F4F4F4',
    width: 285,
    height: 60,
    borderRadius: 10,
    marginTop: 15,
  },
  tabview2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 265,
    alignSelf: 'center',
    marginTop: 9,
  },
  viewtext: {fontSize: 12, fontWeight: '500', color: '#3F3F3F'},
  tabbtn1: {
    backgroundColor: '#50B248',
    width: 70,
    height: 16,
    justifyContent: 'center',
    borderRadius: 4,
  },
  btntxt1: {
    fontSize: 8,
    fontWeight: '500',
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  coltext: {fontSize: 12, fontWeight: '500'},
});
