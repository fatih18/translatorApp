import React from 'react';

import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppNavigator } from './navigator/AppNavigator';
import { Provider } from 'react-redux';
import { configureAppStore } from './store/configureStore';

const { store } = configureAppStore();

const queryCLient = new QueryClient();

export const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <QueryClientProvider client={queryCLient}>
          <AppNavigator />
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
};
