import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoMore: React.FC = () => (
  <View style={style.container}>
    <Text style={style.text}>暂无更多</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    color: '#999',
    marginRight: 10,
  },
});

export default NoMore;
