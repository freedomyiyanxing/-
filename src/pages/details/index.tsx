import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { FullStackParamList } from '@navigator/index';

interface IProps {
  route: RouteProp<FullStackParamList, 'Details'>;
}

const Details: React.FC<IProps> = ({ route }) => {
  console.log(route.params.id);
  return (
    <View>
      <Text>Details</Text>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default Details;
