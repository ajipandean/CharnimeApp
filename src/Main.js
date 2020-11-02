import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  ScrollView,
} from 'react-native';
import { Appbar, Avatar, FAB } from 'react-native-paper';

const Main = () => (
  <ScrollView>
    <Appbar.Header>
      <Appbar.Content title="Charanime App"/>
      <Appbar.Action icon="magnify" onPress={() => {}}/>
    </Appbar.Header>
    <StatusBar style="inverted"/>
  </ScrollView>
);

export default Main;
