import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
} from 'react-native';

const Home = () => (
  <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <Text>Home</Text>
    <StatusBar style="auto"/>
  </View>
);

export default Home;
