import Sound from 'react-native-sound';

// 在静音模式下启用播放
Sound.setCategory('Playback');

let sound: Sound;

/**
 * 初始化音频
 * @param filepath 播放地址
 */
export const initPlayer = (filepath: string) =>
  new Promise((resolve, reject) => {
    sound = new Sound(filepath, '', (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        reject(error);
      } else {
        resolve(sound);
      }
    });
  });

/**
 * 开始播放 播放完成才执行回调
 */
export const play = () =>
  new Promise((resolve, reject) => {
    sound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
        resolve(sound);
      } else {
        console.log('playback failed due to audio decoding errors');
        reject();
      }
    });
  });

/**
 * 停止播放
 */
export const stop = () =>
  new Promise((resolve, reject) => {
    if (sound) {
      sound.stop(() => {
        resolve();
      });
    } else {
      reject();
    }
  });

/**
 * 获取当前播放时间
 */
export const getCurrentTime = () =>
  new Promise((resolve, reject) => {
    if (sound && sound.isLoaded()) {
      sound.getCurrentTime(resolve);
    } else {
      reject(0);
    }
  });

/**
 * 获取时长
 */
export const getDuration = () => {
  if (sound) {
    return sound.getDuration();
  }
  return 0;
};
