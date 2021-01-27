import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
  introduction: string;
}

const Introduction: React.FC<IProps> = ({ introduction }) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{introduction}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 12,
    color: '#666',
  },
});

export default Introduction;
