const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Customize the config to exclude style.ts
  config.module.rules.push({
    test: /style\.ts$/,
    use: 'null-loader'
  });

  return config;
};
