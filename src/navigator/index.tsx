/**
 * 堆栈式导航栏
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import { Platform, StatusBar, StyleSheet } from 'react-native';

import Details from '@pages/details';
import BottomTab from '@navigator/bottomTabs';

export type RootStackParamList = {
  BottomTabs: undefined;
  Details: {
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="float"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerStatusBarHeight: StatusBar.currentHeight,
          headerStyle: {
            height: 60,
            backgroundColor: '#f88c16',
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
            }),
          },
          headerTintColor: '#333333',
          headerTitleStyle: {
            fontSize: 14,
          },
        }}>
        <Stack.Screen name="BottomTabs" component={BottomTab} />
        <Stack.Screen name="Details" component={Details} options={{ headerTitle: '详情页面' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
