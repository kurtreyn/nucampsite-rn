import React from 'react';
import { LogBox } from 'react-native';
import Main from './components/MainComponent';

export default function App() {
  return <Main />;
}

LogBox.ignoreAllLogs(true);
// LogBox.ignoreLogs('');
