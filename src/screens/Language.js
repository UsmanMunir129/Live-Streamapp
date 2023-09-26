import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Language = ({navigation}) => {
  const [english, setEnglish] = useState(false);
  const [chinese, setChinese] = useState(false);
  const [japanese, setJapanese] = useState(false);

  const languagecheck = value => {
    if (value == 'English') {
      setEnglish(true);
      setChinese(false);
      setJapanese(false);
    } else if (value == 'Chinese') {
      setEnglish(false);
      setChinese(true);
      setJapanese(false);
    } else if (value == 'Japanese') {
      setEnglish(false);
      setChinese(false);
      setJapanese(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnback}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.change}>
        <Text style={styles.text1}>Change Language</Text>
      </View>
      <View style={styles.eng}>
        <Text style={styles.engtext}>English</Text>
        <Switch
          trackColor={{false: '#999999', true: '#50B248'}}
          thumbColor={english ? '#50B248' : '#50B248'}
          value={english}
          onValueChange={
            () => languagecheck('English')
            // setEnglish(!english)
          }
        />
      </View>
      <View style={styles.eng}>
        <Text style={styles.engtext}>Traditional Chinese</Text>
        <Switch
          trackColor={{false: '#999999', true: '#50B248'}}
          thumbColor={chinese ? '#50B248' : '#50B248'}
          value={chinese}
          onValueChange={
            () => languagecheck('Chinese')
            // setChinese(!chinese)
          }
        />
      </View>
      <View style={styles.eng}>
        <Text style={styles.engtext}>Japanese</Text>
        <Switch
          trackColor={{false: '#999999', true: '#50B248'}}
          thumbColor={japanese ? '#50B248' : '#50B248'}
          value={japanese}
          onValueChange={
            () => languagecheck('Japanese')
            // setJapanese(!japanese)
          }
        />
      </View>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  back: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
  },
  btnback: {
    width: '14%',
    marginLeft: 22,
    marginTop: 15,
  },
  change: {
    marginLeft: 22,
    marginTop: 36,
  },
  text1: {
    fontWeight: '500',
    fontSize: 25,
    color: '#000',
  },
  eng: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    width: '82%',
    alignSelf: 'center',
  },
  engtext: {
    fontWeight: '500',
    fontSize: 22,
    color: '#000',
  },
});
