import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ListItemTypes } from '@pages/home/request';
import IconFont from '@assets/iconfont';
import TouchClick from '@components/touchable/Touchable-click';

interface IItemProps {
  onPress: (item: ListItemTypes) => void;
  item: ListItemTypes;
}

const ListItem: React.FC<IItemProps> = ({ item, onPress }) => (
  <TouchClick style={style.wrapper} onPress={() => onPress(item)}>
    <Image source={{ uri: item.image }} style={style.image} />
    <View style={style.right}>
      <Text style={style.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={style.remark} numberOfLines={2}>
        {item.remark}
      </Text>
      <View style={style.playWrapper}>
        <View style={style.play}>
          <IconFont name="icon-zai-ting" size={14} color="#999" />
          <Text style={style.playText}>{item.played}</Text>
        </View>
        <View style={style.play}>
          <IconFont name="icon-ding-yue" size={14} color="#999" />
          <Text style={style.playText}>{item.playing}</Text>
        </View>
      </View>
    </View>
  </TouchClick>
);

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#efefef',
  },
  right: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    color: '#666',
  },
  remark: {
    marginBottom: 20,
    fontSize: 10,
    color: '#9f9f9f',
    padding: 2,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  playWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  play: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 10,
  },
  playText: {
    marginLeft: 4,
    fontSize: 10,
    color: '#9f9f9f',
  },
});

export default ListItem;
