import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const PacCard1 = () => {
  const navigation = useNavigation({navigation});

  return (
    <View>
      <View style={styles.card}>
        <View style={{marginLeft: 30, marginTop: 20}}>
          <Text style={styles.cardtxt}>20 €</Text>
        </View>
        <View style={{marginLeft: 23}}>
          <View style={styles.line}></View>
          <Text style={styles.txt1}>Team Basic Model</Text>
          <View style={{marginTop: 40}}>
            <View style={styles.iconcon}>
              <AntDesign name="checkcircle" size={18} color={'#fff'} />
              <Text style={styles.txt2}>Benefits</Text>
            </View>
            <View style={styles.iconcon}>
              <AntDesign name="checkcircle" size={18} color={'#fff'} />
              <Text style={styles.txt2}>Benefits</Text>
            </View>
            <View style={styles.iconcon}>
              <AntDesign name="checkcircle" size={18} color={'#fff'} />
              <Text style={styles.txt2}>Benefits</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('')}
          style={styles.btn}>
          <Text style={styles.btntxt}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PacCard1;

const styles = StyleSheet.create({
  card: {
    height: 450,
    width: 304,
    backgroundColor: '#50B248',
    alignSelf: 'center',
    marginTop: 76,
    borderRadius: 15,
  },
  cardtxt: {
    fontSize: 36,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#fff',
  },
  line: {
    width: 257,
    backgroundColor: '#fff',
    height: 1,
    marginTop: 14,
  },
  txt1: {
    fontSize: 23,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: '#fff',
    marginTop: 12,
  },
  txt2: {
    fontWeight: '400',
    fontSize: 14,
    color: '#fff',
    paddingLeft: 7,
  },
  iconcon: {flexDirection: 'row', paddingTop: 8},
  btn: {
    width: 166,
    height: 45,
    backgroundColor: '#fff',
    marginTop: 71,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 7,
    justifyContent: 'center',
  },
  btntxt: {fontSize: 22, fontWeight: '500', color: '#50B248'},
});
