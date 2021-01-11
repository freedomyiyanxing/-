import React from 'react';
import Navigator from '@navigator/index'; // 堆栈式导航栏
import { StatusBar } from 'react-native';

const App = () => (
  <>
    <Navigator />
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
    />
  </>
);

export default App;
