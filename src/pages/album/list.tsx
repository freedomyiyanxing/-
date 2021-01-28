import React from 'react';
import { View, Text, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { albumListType } from './index';
import IconFont from '@assets/iconfont';
import TouchClick from '@components/touchable/Touchable-click';

interface IProps {
  data: Array<albumListType>;
  goToDetails: (id: string) => void;
}

const Item = ({ item, index }: ListRenderItemInfo<albumListType>) => (
  <View key={item.id} style={style.container}>
    <View style={style.left}>
      <Text style={style.number}>{index + 1}</Text>
    </View>
    <View style={style.center}>
      <Text style={style.title}>{item.title}</Text>
      <View style={style.bomWrapper}>
        <IconFont name="icon-music" size={14} color="#999" />
        <Text style={style.text}>{item.playVolume}</Text>
        <IconFont name="icon-zai-ting" size={14} color="#999" />
        <Text style={style.text}>{item.duration}</Text>
      </View>
    </View>
    <Text style={style.date}>{item.date}</Text>
  </View>
);

const List: React.FC<IProps> = ({ data, goToDetails }) => (
  <FlatList
    data={data}
    renderItem={({ item, index, separators }) => (
      <TouchClick key={item.id} onPress={() => goToDetails(item.id)}>
        <Item item={item} index={index} separators={separators} />
      </TouchClick>
    )}
    keyExtractor={(item) => item.id}
  />
);

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingRight: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e3e3e3',
  },
  left: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#666',
    fontSize: 12,
    fontWeight: 'bold',
  },
  center: {
    flex: 10,
  },
  title: {
    color: '#333',
    fontSize: 13,
  },
  bomWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  text: {
    lineHeight: 13,
    fontSize: 12,
    color: '#9f9f9f',
    marginRight: 20,
    marginLeft: 4,
  },
  date: {
    fontSize: 10,
    color: '#9f9f9f',
  },
});

export default React.memo(List);
