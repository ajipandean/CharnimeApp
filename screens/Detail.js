import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Appbar, Button, Title, Subheading, Colors, List, Paragraph } from 'react-native-paper';
import avatar from '../data/avatar';

const Detail = ({ route, navigation }) => {
  const { res } = route.params;
  const [expanded, setExpanded] = React.useState(false);

  const expandHandler = () => setExpanded(!expanded);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <List.Accordion
          title="Appearance"
          left={props => <List.Icon {...props} icon="face"/>}
        >
          <View style={{
            flex: 1,
            marginHorizontal: 8,
          }}>
            <Paragraph>{res.appearance}</Paragraph>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Personality"
          left={props => <List.Icon {...props} icon="human"/>}
        >
          <View style={{
            flex: 1,
            marginHorizontal: 8,
            marginBottom: 16,
          }}>
            <Paragraph>{res.personality}</Paragraph>
          </View>
        </List.Accordion>
      </ScrollView>
      <StatusBar style="inverted"/>
    </SafeAreaView>
  );
};

export default Detail;
