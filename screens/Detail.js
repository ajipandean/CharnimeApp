import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  SafeAreaView,
} from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const Detail = ({ route, navigation }) => {
  const { name, from, code } = route.params.res;

  console.log(route.params);

  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()}/>
        <Appbar.Content title={name}/>
      </Appbar.Header>
      <Button onPress={() => navigation.navigate('detail')}>detail screen... again</Button>
      <StatusBar style="inverted"/>
    </SafeAreaView>
  );
};

export default Detail;
