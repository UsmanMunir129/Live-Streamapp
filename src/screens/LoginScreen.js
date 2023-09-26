import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const LoginScreen = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <View style={{width: '85%', alignSelf: 'center'}}>
          <View style={styles.back}>
            <Text style={styles.txt}>Login</Text>
            <Text style={styles.text}>Please sign in to continue</Text>
            <View style={styles.views}>
              <Feather name="mail" size={20} color={'#000'} />
              <TextInput
                style={styles.styl}
                placeholder="user123@gmail.com"
                placeholderTextColor="#747688"></TextInput>
            </View>
            <View style={styles.views}>
              <MaterialIcons name="lock-outline" size={20} color={'#000'} />
              <View style={{width: '90%'}}>
                <TextInput
                  style={styles.styl}
                  placeholder="Password"
                  placeholderTextColor="#747688"
                  secureTextEntry={hidePass ? true : false}></TextInput>
              </View>
              <TouchableOpacity
                onPress={() => setHidePass(!hidePass)}
                style={{position: 'absolute', right: 12}}>
                <Entypo
                  name={hidePass ? 'eye-with-line' : 'eye'}
                  size={20}
                  color={'#747688'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.forgotview}>
            <TouchableOpacity
              style={{justifyContent: 'flex-end', marginTop: 8}}
              onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={styles.forgottxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.conbtn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainPage')}
              style={styles.loginbtn}>
              <Text style={styles.btntext}>Login</Text>
              <View>
                <Feather name="arrow-right" size={20} color={'white'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signup}>
          <Text style={styles.txt1}>Don’t have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.txt2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  container: {
    width: '100%',
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  back: {
    marginTop: 150,
  },
  txt: {
    color: 'black',
    fontSize: 34,
    fontWeight: '600',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  views: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    marginTop: 35,
    height: 56,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 15,
    padding: 5,
  },
  styl: {
    fontSize: 14,
    color: '#747688',
    alignItems: 'center',
    width: '90%',
  },
  forgottxt: {
    color: '#50B248',
    fontSize: 13,
    fontWeight: '500',
  },
  forgotview: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  conbtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    marginTop: 50,
  },
  loginbtn: {
    flexDirection: 'row',
    backgroundColor: '#50B248',
    justifyContent: 'center',
    width: '38%',
    height: 58,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
  },
  btntext: {
    fontSize: 18,
    color: '#FFFFFF',
    letterSpacing: 1,
    textTransform: 'uppercase',
    padding: 7,
  },
  signup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 147,
    justifyContent: 'center',
  },
  txt1: {
    color: '#9C9C9C',
    fontSize: 13,
    lineHeight: 25,
  },
  txt2: {
    color: '#50B248',
    fontSize: 13,
    lineHeight: 25,
    fontWeight: '600',
  },
});
