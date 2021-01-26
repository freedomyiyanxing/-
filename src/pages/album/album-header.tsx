import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { BlurView } from '@react-native-community/blur'; // 模糊效果组件
import coverRight from '@assets/images/cover-right.png';

interface IProps {
  headerHeight: number;
  data: {
    id: string;
    image: string;
    title: string;
    name: string;
    avatar: string;
    summary: string;
  };
}

const AlbumHeader: React.FC<IProps> = ({ data, headerHeight }) => {
  return (
    <View style={[style.container, { paddingTop: headerHeight - 10 }]}>
      <Image source={{ uri: data.image }} style={style.background} />
      <BlurView style={StyleSheet.absoluteFillObject} blurType="light" blurAmount={4} />
      <View style={style.left}>
        <Image source={{ uri: data.image }} style={style.image} />
        <Image source={coverRight} style={style.cover} />
      </View>
      <View style={style.right}>
        <Text style={style.title}>{data.title}</Text>
        <View style={style.summary}>
          <Text style={style.summaryText} numberOfLines={1}>
            {data.summary}
          </Text>
        </View>
        <View style={style.author}>
          <Image source={{ uri: data.avatar }} style={style.avatar} />
          <Text style={style.name}>{data.name}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 220,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee',
  },
  image: {
    width: 98,
    height: 98,
    borderRadius: 5,
  },
  cover: {
    position: 'absolute',
    height: 98,
    top: -0,
    right: -22,
    resizeMode: 'contain',
  },
  left: {
    marginRight: 20,
  },
  right: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 15,
  },
  summary: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
    padding: 4,
    borderRadius: 5,
  },
  summaryText: {
    fontSize: 10,
    color: '#fff',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 10,
    backgroundColor: '#eea430',
  },
  name: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 13,
  },
});

export default AlbumHeader;
