import React from 'react';
import { LogBox } from 'react-native';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

LogBox.ignoreAllLogs(true);
// LogBox.ignoreLogs('');
