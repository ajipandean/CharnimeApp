import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Appbar, Button, Title, Subheading, Colors } from 'react-native-paper';
import avatar from '../data/avatar';

const Detail = ({ route, navigation }) => {
  const { res } = route.params;

  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()}/>
        <Appbar.Content title={res.name}/>
      </Appbar.Header>
      <ScrollView>
        <View style={{
          padding: 16,
          alignItems: 'center',
        }}>
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 80,
              marginHorizontal: 8,
              marginBottom: 8,
            }}
            source={avatar[res.code]}
          />
          <Title>{res.name}</Title>
          <Text style={{ color: Colors.grey600 }}>{res.from}</Text>
        </View>
      </ScrollView>
      <StatusBar style="inverted"/>
    </SafeAreaView>
  );
};

export default Detail;
