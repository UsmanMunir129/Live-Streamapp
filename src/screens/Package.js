import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PacCard1 from '../components/PacCard1';
import PacCard2 from '../components/PacCard2';

const Package = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.btnback}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
        </View>
        <PacCard1 />
        <PacCard2 />
      </View>
    </ScrollView>
  );
};

export default Package;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingBottom: 50,
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
});
