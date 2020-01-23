module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', 'ios.js', 'android.js'],
      },
    ],
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ],
};
