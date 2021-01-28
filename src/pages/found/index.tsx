import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigation } from '@navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Found: React.FC<IProps> = ({ navigation }) => {
  const onPress = (): void => {
    navigation.navigate('Details', {
      id: 'Found',
    });
  };

  return (
    <View>
      <View>
        <Text>Found</Text>
      </View>
      <View>
        <Button onPress={onPress} title="点击跳转到详情页面" />
      </View>
    </View>
  );
};

export default Found;
