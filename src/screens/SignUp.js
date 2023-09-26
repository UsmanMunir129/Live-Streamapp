import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
const SignUp = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.back}>
          <View style={{paddingLeft: 16}}>
            <Text style={styles.txt}>Create Account</Text>
            <Text style={styles.text}>Please sign in to continue</Text>
          </View>
          <View style={{marginTop: 20}}>
            <View style={styles.views}>
              <Ionicons
                name="md-person-circle-outline"
                size={22}
                color={'#000'}
              />
              <TextInput
                style={styles.styl}
                placeholder="Full Name"
                placeholderTextColor="#747688"></TextInput>
            </View>
            <View style={styles.views}>
              <Feather name="mail" size={20} color={'#000'} />
              <TextInput
                style={styles.styl}
                placeholder="user123@gmail.com"
                placeholderTextColor="#747688"></TextInput>
            </View>
            <View style={styles.views}>
              <MaterialIcons name="lock-outline" size={20} color={'#000'} />
              <TextInput
                style={styles.styl}
                placeholder="Password"
                placeholderTextColor="#747688"></TextInput>
            </View>
            <View style={styles.views}>
              <MaterialIcons name="lock-outline" size={20} color={'#000'} />
              <TextInput
                style={styles.styl}
                placeholder="Confirm Password"
                placeholderTextColor="#747688"></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.signup}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainPage')}
            style={styles.btnsign}>
            <Text style={styles.txtsign}>Sign Up</Text>
            <View>
              <Feather name="arrow-right" size={20} color={'white'} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.txtlst}>
          <Text style={styles.botmtxt}>Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.btmtxt1}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  container: {
    width: '100%',
    paddingBottom: 15,
  },
  back: {
    padding: 15,
    marginTop: 90,
    justifyContent: 'flex-end',
    width: '100%',
  },
  txt: {
    color: 'black',
    fontSize: 34,
    fontWeight: '600',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  views: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    marginTop: 20,
    height: 56,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 15,
  },
  styl: {
    fontSize: 14,
    color: '#747688',
    alignItems: 'center',
    width: '90%',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 28,
    marginTop: 50,
  },
  btnsign: {
    flexDirection: 'row',
    backgroundColor: '#50B248',
    justifyContent: 'center',
    width: '38%',
    height: 58,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
    padding: 10,
  },
  txtsign: {
    fontSize: 18,
    color: '#FFFFFF',
    letterSpacing: 1,
    padding: 7,
  },
  txtlst: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    justifyContent: 'center',
  },
  botmtxt: {
    color: '#9C9C9C',
    fontSize: 13,
    lineHeight: 25,
  },
  btmtxt1: {
    color: '#50B248',
    fontSize: 13,
    lineHeight: 25,
    fontWeight: '600',
  },
});
