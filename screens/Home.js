import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { Appbar, Button, List } from 'react-native-paper';
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
            style={{ marginRight: 8 }}
            left={props => (
              <Image
                {...props}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 80,
                  marginHorizontal: 8
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
