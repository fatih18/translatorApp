import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { HomeScene, HistoryScene } from './screens';

export type NavigatorParamList<T = unknown> = {
  homeScene: undefined;
  historyScene: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeScene"
        component={HomeScene}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ title: 'Translation History' }}
        name="historyScene"
        component={HistoryScene}
      />
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';
