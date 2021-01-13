import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { getGuess, GuessDataTypes } from '@pages/home/request';
import IconFont from '@assets/iconfont';
import TouchClick from '@components/touchable/Touchable-click';

interface IProps {
  data: Array<GuessDataTypes>;
}

const RenderItem: React.FC<IProps> = ({ data }) => (
  <>
    {data.map((item) => (
      <TouchClick key={item.id} style={style.item} onPress={() => Alert.alert(item.id)}>
        <Image source={{ uri: item.image }} style={style.image} />
        <Text style={style.title} numberOfLines={2}>
          {item.title}
        </Text>
      </TouchClick>
    ))}
  </>
);

const Guess: React.FC = () => {
  const [data, setData] = useState<Array<GuessDataTypes> | []>([]);

  const getData = (): void => {
    getGuess().then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChangeBatch = (): void => {
    getData();
  };

  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <View style={style.left}>
          <IconFont name="icon-cainixihuan" color="#999999" size={14} />
          <Text style={style.text}>猜你喜欢</Text>
        </View>
        <View style={style.right}>
          <Text style={style.text}>更多</Text>
          <IconFont name="icon-more" color="#999999" size={14} />
        </View>
      </View>
      <View style={style.list}>{data.length ? <RenderItem data={data} /> : null}</View>
      <TouchClick style={style.footerContainer} onPress={handleChangeBatch}>
        <IconFont name="icon-huanyipi" color="#f86c1a" size={14} />
        <Text style={style.text}>换一批</Text>
      </TouchClick>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    margin: 8,
    padding: 4,
    backgroundColor: '#fff',
  },
  image: {
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    width: 100,
    marginVertical: 6,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 10,
    color: '#999999',
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 4,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#999999',
    marginHorizontal: 5,
    lineHeight: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Guess;
