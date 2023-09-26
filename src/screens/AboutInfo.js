import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

const AboutInfo = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.btnback}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.maincon}>
            <View style={styles.con}>
              <Text style={styles.txt}>About App</Text>
            </View>
            <View style={styles.innercon}>
              <Text style={styles.innertxt}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
                temporibus omnis! Recusandae dolor rerum pariatur nesciunt sed
                sit perferendis vitae ipsam, dolore dicta, tempore nemo iure
                libero praesentium soluta ad veniam ullam distinctio dignissimos
                ducimus quas mollitia, sunt eius nobis? Similique aliquid quidem
                sequi sapiente commodi ipsa assumenda earum maiores.
              </Text>
            </View>
            <View style={styles.con}>
              <Text style={styles.txt}>Frequently asked questions</Text>
            </View>
            <View style={styles.innercon}>
              <Text style={styles.innertxt}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
                temporibus omnis! Recusandae dolor rerum pariatur nesciunt sed
                sit perferendis vitae ipsam, dolore dicta, tempore nemo iure
                libero praesentium soluta ad veniam ullam distinctio dignissimos
                ducimus quas mollitia, sunt eius nobis? Similique aliquid quidem
                sequi sapiente commodi ipsa assumenda earum maiores.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footr}>
        <Text style={styles.footrtxt}>Ask Us:</Text>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <TextInput style={styles.footrinput} />
          <View style={{marginTop: 30}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('')}
              style={styles.btn}>
              <Text style={styles.btntxt}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutInfo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingBottom: 220,
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
  con: {
    marginTop: 28,
  },
  maincon: {
    width: 320,
    alignSelf: 'center',
  },
  txt: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  innercon: {
    height: 300,
    backgroundColor: '#ECECEC',
    marginTop: 10,
  },
  innertxt: {
    color: '#000',
    fontSize: 16,
    padding: 15,
  },
  footr: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    height: 190,
  },
  footrtxt: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginLeft: 28,
    marginTop: 15,
  },
  footrinput: {
    borderWidth: 2,
    borderColor: '#00A50B',
    width: 300,
    height: 35,
  },
  btn: {
    height: 37,
    width: 102,
    backgroundColor: '#00A50B',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntxt: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
