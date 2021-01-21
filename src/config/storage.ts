import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'react-native-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 7,
  enableCache: true,
  sync: {},
});

export default storage;
