import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

const TouchClick: React.FC<TouchableOpacityProps> = (props) => (
  <TouchableOpacity activeOpacity={0.6} {...props} />
);

export default TouchClick;
