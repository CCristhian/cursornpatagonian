import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import { BookDetailsScreen, ExperimentalScreen, InitializeScreen } from '../screens';
import BooksStack from './BooksStack';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Initilize" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Initilize" component={InitializeScreen} />
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
