import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from 'react-native-slider-x';
import { getCurrentTime } from '@config/sound';
import { filterTime } from '@utils/index';

interface IProps {
  data: {
    duration: number; // 当前音乐时长
    playStatus: 'play' | 'pause'; // 当前播放状态
  };
}

const PlaySlider: React.FC<IProps> = ({ data }) => {
  const [currentTime, setCurrentTime] = React.useState(0);
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (data.playStatus === 'play') {
      interval = setInterval(async () => {
        const time = await getCurrentTime();
        console.log('当前时间-->', time);
        if (typeof time === 'number') {
          setCurrentTime(time);
        }
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [data.playStatus]);

  return (
    <View style={style.wrapper}>
      <View style={style.timeWrapper}>
        <Text style={style.time}>{currentTime < 1 ? '00:00' : filterTime(currentTime)}</Text>
        <Text style={style.time}>{filterTime(data.duration)}</Text>
      </View>
      <Slider
        value={currentTime | 0}
        maximumValue={data.duration | 0}
        maximumTrackTintColor="rgba(255,255,255,0.3)"
        minimumTrackTintColor="#F88E2B"
        thumbStyle={style.thumb}
        style={style.sliderWrapper}
      />
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 12,
    color: '#f9f9f9',
  },
  sliderWrapper: {
    height: 20,
  },
  thumb: {
    width: 30,
    height: 12,
    backgroundColor: '#f86c1a',
  },
});

export default PlaySlider;
