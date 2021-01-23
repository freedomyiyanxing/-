import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { StyleSheet } from 'react-native';

interface IProps {
  onSubmit: () => void;
  isEdit: boolean;
}

const HeaderRightBtn: React.FC<IProps> = ({ onSubmit, isEdit }) => (
  <HeaderButtons>
    <Item title={isEdit ? '完成' : '编辑'} onPress={onSubmit} buttonStyle={style.btn} />
  </HeaderButtons>
);

const style = StyleSheet.create({
  btn: {
    fontSize: 12,
    color: '#333',
  },
});

export default HeaderRightBtn;
