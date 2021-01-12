import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { GuessDataTypes } from '@pages/home/request';

interface IProps {
  data: Array<GuessDataTypes>;
}

const RenderItem = ({ item }: { item: GuessDataTypes }) => {
  return (
    <View style={style.item}>
      <Image source={{ uri: item.image }} style={style.image} />
      <Text style={style.text} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );
};

const Guess: React.FC<IProps> = ({ data }) => {
  return (
    <View style={style.container}>
      <FlatList numColumns={3} data={data} renderItem={RenderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 8,
    margin: 8,
    padding: 4,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 10,
    color: '#666',
  },
});

export default Guess;
