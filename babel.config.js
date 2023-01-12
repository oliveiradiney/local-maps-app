module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
   
      [
        'module-resolver',
        {
          root: ['./src'],
          extesions:[
            '.ts',
            '.tsx',
            '.js',
            '.json'
          ],
          alias:{
  
            '@screens':'./src/screens',
            '@assets':'./src/assets',
   
          }
        }
      ]
    ]
  };
};
