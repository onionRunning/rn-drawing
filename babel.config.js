module.exports = {
  plugins: [
    "@babel/plugin-transform-object-super",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@images": "./src/images",
          "@utils": "./src/utils",
          "@global": "./src/global",
          "@components": "./src/components",
          "@src": "./src"
        },
        extensions: ['.tsx'],
      }
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
