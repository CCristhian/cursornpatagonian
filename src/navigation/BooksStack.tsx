import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BookDetailsScreen, BooksScreen } from '../screens';

const Stack = createNativeStackNavigator();

const BooksStack = () => (
  <Stack.Navigator initialRouteName="Books" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Books" component={BooksScreen} />
    <Stack.Screen name="BooksDetail" component={BookDetailsScreen} />
  </Stack.Navigator>
);

export default BooksStack;
