/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Options from './src/screens/Options';
import AppProvider from './src/providers/AppProvider';
import AnimatedScreen from './src/screens/AnimatedScreen';
import MaskedScreen from './src/screens/MaskedScreen';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <AppProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Options"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Options" component={Options} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Animated" component={AnimatedScreen} />
              <Stack.Screen name="Masked" component={MaskedScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </AppProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
