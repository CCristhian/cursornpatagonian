import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BooksScreen, CharacterScreen, HistoryScreen } from '../screens';
import HomeStack from './HomeStack';

import { colors } from '../utils/theme';

type Route = RouteProp<Record<string, object | undefined>, string>;

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string) => {
  let iconName = '';
  switch (routeName) {
    case 'HomeTab':
      iconName = 'home';
      break;
    case 'BooksTab':
      iconName = 'menu-book';
      break;
    case 'CharacterTab':
      iconName = 'badge';
      break;
    case 'HistoryTab':
      iconName = 'history';
      break;
    default:
      iconName = 'help-outline';
      break;
  }

  return iconName;
};

const navigatorScreenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
    const iconName = getIconName(route.name);
    const iconSize = focused ? size * 1.2 : size;
    return (
      <MaterialIcon
        name={iconName}
        size={iconSize}
        color={color}
        style={focused ? { transform: [{ rotateZ: '10deg' }] } : {}}
      />
    );
  },
  tabBarAllowFontScaling: false,
  tabBarInactiveBackgroundColor: colors.primaryColor,
  tabBarActiveBackgroundColor: colors.primaryColor,
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.secondaryColor,
  tabBarLabelStyle: {
    fontSize: 12,
  },
  headerShown: false,
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen name="BooksTab" component={BooksScreen} options={{ title: 'Books' }} />
      <Tab.Screen
        name="CharacterTab"
        component={CharacterScreen}
        options={{ title: 'Characters' }}
      />
      <Tab.Screen name="HistoryTab" component={HistoryScreen} options={{ title: 'History' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
