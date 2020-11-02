import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { Appbar, Button, List, Avatar } from 'react-native-paper';
import imouto from '../data/imouto';
import avatar from '../data/avatar';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.Content title="Charanime App"/>
      </Appbar.Header>
      <ScrollView>
        {imouto.map((res, index) => (
          <List.Item
            key={index}
            title={res.name}
            description={res.from}
            onPress={() => navigation.navigate('detail', { res })}
            titleStyle={{ fontWeight: 'bold' }}
            descriptionNumberOfLines={1}
            right={() => (
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 3,
                  marginLeft: 16,
                }}
                source={avatar[res.code]}
              />
            )}
          />
        ))}
      </ScrollView>
      <StatusBar style="inverted"/>
    </SafeAreaView>
  );
};

export default Home;
