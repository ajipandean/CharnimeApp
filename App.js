import * as React from 'react';
import { AppRegistry, View } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { name as appName } from './app.json';
import Home from './src/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              title: 'Home',
              headerRight: () => (
                <Appbar.Action
                  icon="magnify"
                  onPress={() => console.log('Ashiap!')}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
