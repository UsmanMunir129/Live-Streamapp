import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Intro from '../screens/Intro';
import Intro1 from '../screens/Intro1';
import GetStarted from '../screens/GetStarted';
import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUp';
import MainPage from '../screens/MainPage';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import Language from '../screens/Language';
import Package from '../screens/Package';
import AboutInfo from '../screens/AboutInfo';
import Manageteam from '../screens/Manageteam';
import CreateTeam from '../screens/CreateTeam';
import TeamManagement from '../screens/TeamManagement';
import Editteam1 from '../screens/Editteam1';
import Addingplayer from '../screens/Addingplayer';
import PlayerDetails from '../screens/PlayerDetails';

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Intro1"
        component={Intro1}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Package"
        component={Package}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="AboutInfo"
        component={AboutInfo}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Manageteam"
        component={Manageteam}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="CreateTeam"
        component={CreateTeam}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="TeamManagement"
        component={TeamManagement}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Editteam1"
        component={Editteam1}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Addingplayer"
        component={Addingplayer}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="PlayerDetails"
        component={PlayerDetails}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
}
export default RootStack;
