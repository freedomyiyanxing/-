import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { viewportWidth } from '@utils/index';
import { CategoryDataType } from './index';
import TouchClick from '@components/touchable/Touchable-click';

interface IProps {
  item: CategoryDataType;
  index: number;
  isEdit: boolean;
  isSelect: boolean;
  onLongPress?: () => void;
  onPress: (item: CategoryDataType, index: number, isSelect: boolean) => void;
}

const parentWidth = viewportWidth - 10;
const itemWith = parentWidth / 4;

const RenderItem: React.FC<IProps> = (props) => {
  const { item, index, isEdit, isSelect, onLongPress, onPress } = props;
  return (
    <TouchClick
      key={item.id}
      style={style.item}
      onLongPress={onLongPress}
      onPress={() => onPress(item, index, isSelect)}>
      <View style={style.itemWrapper}>
        <Text style={style.name}>{item.name}</Text>
        {!item.isFreeze && isEdit ? (
          <View style={style.icon}>
            <Text style={style.iconText}>{isSelect ? '-' : '+'}</Text>
          </View>
        ) : null}
      </View>
    </TouchClick>
  );
};

const style = StyleSheet.create({
  item: {
    width: itemWith,
  },
  itemWrapper: {
    height: 32,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 12,
    color: '#666',
  },
  icon: {
    position: 'absolute',
    top: -6,
    right: -4,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#f8aa77',
  },
  iconText: {
    lineHeight: 16,
    color: '#fff',
  },
});

export default RenderItem;
