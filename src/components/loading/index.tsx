import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import IconFont from '@assets/iconfont';

const Loading: React.FC = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={style.container}>
      <Text style={style.text}>加载中...</Text>
      <Animated.View style={[{ transform: [{ rotate: spin }] }]}>
        <IconFont name="icon-loading" size={20} color="#999" />
      </Animated.View>
    </View>
  );
};

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

export default Loading;
