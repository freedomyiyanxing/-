import React from 'react';
import Navigator from '@navigator/index'; // 堆栈式导航栏
import { StatusBar } from 'react-native';

const App = () => (
  <>
    <Navigator />
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
  </>
);

export default App;

/**
 * 记录
 * 1、调式网络请求
 * react-native-debugger
 * 注释掉 node_modules/react-native/Libraries/Core/setUpXHR.js 文件中的
 * 这行 polyfillGlobal('XMLHttpRequest', () => require('../Network/XMLHttpRequest'));
 * 注意这种方式只能用在你调试时查看网络请求，如果正式打包，请将注释改回。
 *
 * 2、
 */
