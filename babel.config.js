module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@navigator': './src/navigator',
          '@pages': './src/pages',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
