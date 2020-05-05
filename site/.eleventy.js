module.exports = (config) => {
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/sw.js');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/downloads');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
