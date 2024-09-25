import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './components/Splash';
import Login from './components/Login';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Settings from './components/Settings';
import CreatePost from './components/CreatePost';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Feed" component={Feed} options={{ title: 'Feed' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
        <Stack.Screen name="CreatePost" component={CreatePost} options={{ title: 'Create Post' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}